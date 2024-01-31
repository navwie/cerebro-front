<?php

namespace App\Providers;

use Aws\CloudFront\CloudFrontClient;
use Illuminate\Support\Facades\Redis;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\ServiceProvider;
use Illuminate\Support\Facades\Request;
use App\Models\Sites;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Str;

class MultidomainServiceProvider extends ServiceProvider
{
    /**
     * Register services.
     *
     * @return void
     */
    const IMAGES = [
        'logo',
        'hero',
        'hero',
        'favicon',
        'footer_logo',
        'why_us_bg',
        'advantages_bg',
        'comfort_bg',
        'comfort_bg2',
        'last_bg',
    ];

    public function register()
    {
        //
    }

    /**
     * Bootstrap services.
     *
     * @return void
     */
    public function boot()
    {
        //
    }

    static function getSiteParam(string $param)
    {

        $site = self::getSiteFromRedis();

        if (in_array($param, self::IMAGES)) {
            return self::getResourceUrl($param);
        }

        return $site->$param;
    }

    static function getSite()
    {
        $site = self::getSiteFromRedis();

        if ($site->site_type === 'loan') {
            if(!isset($site->theme_settings)){
                Log::channel('debugging')->info(Request::server('HTTP_HOST') . ' | ' . json_encode(array($site)));
            }
            $settings = json_decode($site->theme_settings, true);
            self::updateResourceUrls($settings);
            $site->theme_settings = json_encode($settings);
        }

        $site->logo = self::getResourceUrl('logo');
        $site->favicon = self::getResourceUrl('favicon');
        $site->hero = self::getResourceUrl('hero');
        // var_dump($site->settings);
        return $site;
    }

    static function getSiteFromRedis()
    {
        $domain = Sites::clearWwwFromDomainName(Request::server('HTTP_HOST'));
        if (!$domain) {
            Log::channel('debugging')->info(Request::server());
            return false;
        }

        $domain = explode(':', $domain)[0];
        $domainFromRedis = Redis::get($domain);
        if (!$domainFromRedis) {
            $site = Sites::where(['domain_name' => $domain])->first();
            if ($site) {
                Redis::set($domain, json_encode($site));

            } else {
                Log::channel('debugging')->info(Request::server());
                return false;
            }
        }

        return json_decode(Redis::get($domain));
    }

    public static function updateResourceUrls(array &$settings): void
    {
        $cloudFrontDomain = config('filesystems.cloudFrontDomain');
        foreach ($settings as $key => &$value) {
            if (is_array($value)) {
                self::updateResourceUrls($value);
            } elseif (in_array($key, ['favicon', 'background-image', 'src']) && !!$value) {
                if ($cloudFrontDomain) {
                    $url = 'https://' . $cloudFrontDomain . '/common/app/sites/' . $value . '?time=' . time();
                } else {
                    $url = Storage::disk('sitesResources')->url($value) . '?time=' . time();
                }
                if ($key === 'background-image') {
                    $value = "url('{$url}')";
                } else {
                    $value = $url;
                }
            }

        }
    }

    static function getResourceUrl($key): string
    {
        $site = self::getSiteFromRedis();

        $url = null;

        // Find in JSON settings first
        if (!empty($site->theme_settings)) {
            $themeSettings = json_decode($site->theme_settings, true);
            if (!empty($themeSettings['general'][$key])) {
                $url = $themeSettings['general'][$key];
            }
        }

        // If key not found in JSON settings try find it in site fields
        if ($url === null && isset($site->$key)) {
            $url = $site->$key;
        }

        if ($url !== null) {
            $cloudFrontDomain = config('filesystems.cloudFrontDomain');
            if ($cloudFrontDomain) {
                return 'https://' . $cloudFrontDomain . '/common/app/sites/' . $url . '?time=' . time();
            }
            return Storage::disk('sitesResources')->url($url) . '?time=' . time();
        }

        Log::error("Key '{$key}' not found in site settings.");
        return '';
    }

    static function getDistdibutionDetails()
    {
        $cloudFrontClient = new CloudFrontClient([
            'region' => config('aws.region'),
            'version' => 'latest'
        ]);

        $distributions = $cloudFrontClient->listDistributions();

        if (!empty($distributions) && config('filesystems.cloudFrontDistributionDescription')) {
            foreach ($distributions->search('DistributionList.Items') as $distribution) {
                if ($distribution['Comment'] == config('filesystems.cloudFrontDistributionDescription')) {
                    return ['id' => $distribution['Id'], 'domain' => $distribution['DomainName']];
                }
            }
        }
        return null;
    }
}
