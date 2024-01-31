<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Sites extends Model
{
    static function clearWwwFromDomainName($domainName)
    {
        $domain = explode('.', $domainName);

        if($domain[0] == 'www') {
            $length = count($domain) - 1;
            for($i = 1; $i <= $length; $i++){
                $result[] = $domain[$i];
            }

            $result = implode('.', $result);
            return $result;
        }
        return $domainName;
    }
}

