<?php

use Monolog\Handler\NullHandler;
use Monolog\Handler\StreamHandler;
use Monolog\Handler\SyslogUdpHandler;
use Monolog\Formatter\LineFormatter;

$key = '';
$secret = '';

$awsSettings = [
    'driver' => 'custom',
    'region' => env('CLOUDWATCH_LOG_REGION', 'us-east-1'),
    'credentials' => [
        'key' => env('CLOUDWATCH_LOG_KEY', $key),
        'secret' => env('CLOUDWATCH_LOG_SECRET', $secret)
    ],
    'version' => env('CLOUDWATCH_LOG_VERSION', 'latest'),
    'formatter' => function ($configs) {
        return new LineFormatter(
            '%level_name%: %message% %context% %extra%',
            //"[%datetime%] %level_name%: %message% %context% %extra%\n",
            'Y-m-d H:i:s',
            true,
            true,
            true
        );
    },
    'batch_size' => env('CLOUDWATCH_LOG_BATCH_SIZE', 10000),
    'via' => \Pagevamp\Logger::class,
    'retention' => env('CLOUDWATCH_LOG_RETENTION_DAYS', 14),
    'group_name' => env('CLOUDWATCH_LOG_GROUP_NAME', env('APP_NAME')),
];

return [

    /*
    |--------------------------------------------------------------------------
    | Default Log Channel
    |--------------------------------------------------------------------------
    |
    | This option defines the default log channel that gets used when writing
    | messages to the logs. The name specified in this option should match
    | one of the channels defined in the "channels" configuration array.
    |
    */

    'default' => env('LOG_CHANNEL', 'daily'),

    /*
    |--------------------------------------------------------------------------
    | Deprecations Log Channel
    |--------------------------------------------------------------------------
    |
    | This option controls the log channel that should be used to log warnings
    | regarding deprecated PHP and library features. This allows you to get
    | your application ready for upcoming major versions of dependencies.
    |
    */

    'deprecations' => [
        'channel' => env('LOG_DEPRECATIONS_CHANNEL', 'null'),
        'trace' => false,
    ],

    /*
    |--------------------------------------------------------------------------
    | Log Channels
    |--------------------------------------------------------------------------
    |
    | Here you may configure the log channels for your application. Out of
    | the box, Laravel uses the Monolog PHP logging library. This gives
    | you a variety of powerful log handlers / formatters to utilize.
    |
    | Available Drivers: "single", "daily", "slack", "syslog",
    |                    "errorlog", "monolog",
    |                    "custom", "stack"
    |
    */

    'channels' => [
        'stack' => [
            'driver' => 'stack',
            'channels' => ['single'],
            'ignore_exceptions' => false,
        ],

        'single' => array_merge($awsSettings, [
            'name' => 'single',
            'stream_name' => 'Single',
            'level' => env('LOG_LEVEL', 'debug'),
        ]),

        'daily' => array_merge($awsSettings, [
            'name' => 'daily',
            'stream_name' => 'Daily',
            'level' => env('LOG_LEVEL', 'debug'),
        ]),

        'debugging' => array_merge($awsSettings, [
            'name' => 'debugging',
            'stream_name' => 'Debugging',
            'level' => env('LOG_LEVEL', 'debug'),
        ]),

        'papertrail' => [
            'driver' => 'monolog',
            'level' => env('LOG_LEVEL', 'debug'),
            'handler' => env('LOG_PAPERTRAIL_HANDLER', SyslogUdpHandler::class),
            'handler_with' => [
                'host' => env('PAPERTRAIL_URL'),
                'port' => env('PAPERTRAIL_PORT'),
                'connectionString' => 'tls://'.env('PAPERTRAIL_URL').':'.env('PAPERTRAIL_PORT'),
            ],
        ],

        'stderr' => [
            'driver' => 'monolog',
            'level' => env('LOG_LEVEL', 'debug'),
            'handler' => StreamHandler::class,
            'formatter' => env('LOG_STDERR_FORMATTER'),
            'with' => [
                'stream' => 'php://stderr',
            ],
        ],

        'syslog' => array_merge($awsSettings, [
            'name' => 'syslog',
            'stream_name' => 'SysLog',
            'level' => env('LOG_LEVEL', 'debug'),
        ]),

        'errorlog' => array_merge($awsSettings, [
            'name' => 'errorlog',
            'stream_name' => 'ErrorLog',
            'level' => env('LOG_LEVEL', 'debug'),
        ]),

        'null' => [
            'driver' => 'monolog',
            'handler' => NullHandler::class,
        ],

        'emergency' => array_merge($awsSettings, [
            'name' => 'emergency',
            'stream_name' => 'Emergency',
        ]),

        'cloudwatch' => array_merge($awsSettings, [
            'name' => 'test-stream',
            'stream_name' => 'Test Front Stream',
        ]),
    ],

];
