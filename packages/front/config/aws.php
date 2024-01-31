<?php

use Aws\Laravel\AwsServiceProvider;
/*use Aws\Credentials\InstanceProfileProvider;

try {
    $credentials = (new InstanceProfileProvider(['profile' => env('AWS_EC2_ROLE_NAME')]))()->wait();
    $key = $credentials->getAccessKeyId();
    $secret = $credentials->getSecretKey();
} catch (\Exception $exception) {
    $key = '';
    $secret = '';
}*/

$key = '';
$secret = '';

return [

    /*
    |--------------------------------------------------------------------------
    | AWS SDK Configuration
    |--------------------------------------------------------------------------
    |
    | The configuration options set in this file will be passed directly to the
    | `Aws\Sdk` object, from which all client objects are created. This file
    | is published to the application config directory for modification by the
    | user. The full set of possible options are documented at:
    | http://docs.aws.amazon.com/aws-sdk-php/v3/guide/guide/configuration.html
    |
    */
    'credentials' => [
        'key'    => env('AWS_ACCESS_KEY_ID', $key),
        'secret' => env('AWS_SECRET_ACCESS_KEY', $secret),
    ],

    'region' => env('AWS_REGION', 'us-east-1'),
    'version' => 'latest',
    'ua_append' => [
        'L5MOD/' . AwsServiceProvider::VERSION,
    ],
    'apiAGName' => env('AWS_API_AG_NAME'),
    'tokenEndpoint' => env('AWS_TOKEN_ENDPOINT'),
    'instanceIdEndpoint' => env('AWS_INSTANCE_ID_ENDPOINT'),
    'albName' => env('AWS_ALB_NAME'),
    'frontRuleTargetGroup' => env('AWS_FRONT_RULE_TARGET_GROUP'),
];
