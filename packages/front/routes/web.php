<?php

use Illuminate\Support\Facades\Request;
use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Redis;
use App\Models\Sites;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

$domainsForEndToEndTesting = [
    'test.lendingsource.smissltd.com',
    'test.loan5000.smissltd.com',
    'test.loan10000.smissltd.com',
    'test.cards.smissltd.com',
];

Route::get('health', function () {
    header('GITHUB_SHA:' . env('GITHUB_SHA'));
    return response()->json(true);
});

$domainFromRequest = Sites::clearWwwFromDomainName(Request::server('HTTP_HOST'));

if (in_array($domainFromRequest, $domainsForEndToEndTesting)) {
    config([
        'database.connections.mysql.database' => 'cerebro_test',
        'database.connections.mysql_audit.database' => 'cerebro_audit_test',
        'app.env' => 'testing',
    ]);
}

try {
    $domainInRedis = Redis::get($domainFromRequest);
    if (!$domainInRedis || !isset($domainInRedis->theme_settings)) {
        $domain = Sites::where(['domain_name' => $domainFromRequest])->first();
        if ($domain) {
            Redis::set($domainFromRequest, json_encode($domain));
        }
    }

} catch (Exception $exception) {
    return false;
}

$domain = json_decode(Redis::get($domainFromRequest));
if ($domain) {
    $rotes = function ($domain) {
        Route::middleware('theme:' . $domain->theme)->group(function () use ($domain) {
            Route::get('/', [App\Http\Controllers\HomeController::class, 'index'])->name('home');
            if ($domain->theme != 'loan10000') {
                Route::get('/terms', [App\Http\Controllers\HomeController::class, 'terms'])->name('terms');
                Route::get('/privacy', [App\Http\Controllers\HomeController::class, 'privacy'])->name('privacy');
                Route::get('/ccpa', [App\Http\Controllers\HomeController::class, 'ccpa'])->name('ccpa');
                Route::get('/econsent', [App\Http\Controllers\HomeController::class, 'econsent'])->name('econsent');
                Route::get('/credit_disclosure', [App\Http\Controllers\HomeController::class, 'credit_disclosure'])->name('credit_disclosure');
            }
            if ($domain->theme == 'lendingnext') {
                Route::get('/faq', [App\Http\Controllers\HomeController::class, 'faq'])->name('faq');
                Route::get('/why_choose_us', [App\Http\Controllers\HomeController::class, 'why_choose_us'])->name('why_choose_us');
                Route::get('/how_it_works', [App\Http\Controllers\HomeController::class, 'how_it_works'])->name('how_it_works');
            }
            Route::get('/redirect', [App\Http\Controllers\HomeController::class, 'redirect'])->name('redirect');
            Route::get('/reject', [App\Http\Controllers\HomeController::class, 'reject'])->name('reject');

            Route::get('/form', [App\Http\Controllers\HomeController::class, 'form'])->name('form');
            Route::get('/reapply', [App\Http\Controllers\HomeController::class, 'reapply'])->name('reapply');
            Route::get('/unsubscribe', [App\Http\Controllers\HomeController::class, 'unsubscribe'])->name('unsubscribe');

        });
    };

    Route::domain($domain->domain_name)->group($rotes($domain));
    Route::domain('www.' . $domain->domain_name)->group($rotes($domain));
}



