<?php

return [
    /*
    |--------------------------------------------------------------------------
    | CEREBRO API Paths
    |--------------------------------------------------------------------------
    */

    'urls' => [
        'set_cookies' => env('CEREBROHUB_COOKIE_SET_URL'),
        'get_cookies' => env('CEREBROHUB_COOKIE_GET_URL'),
        'store_reapply' => env('CEREBROHUB_API_URL_STORE_REAPPLY','https://cerebrohub.com/api/v1/store_reapply'),
        'search_main' => env('CEREBROHUB_API_URL_SEARCH_MAIN','https://cerebrohub.com/api/v1/search_main'),
        'search_reapply' => env('CEREBROHUB_API_URL_SEARCH_REAPPLY','https://cerebrohub.com/api/v1/search_reapply'),
        'check_phone' => env('CEREBROHUB_API_URL_CHECK_PHONE','https://cerebrohub.com/api/v1/check_phone'),
        'get_started' => env('CEREBROHUB_API_URL_GET_STARTED','https://cerebrohub.com/api/v1/get_started'),
        'update_main' => env('CEREBROHUB_API_URL_UPDATE_MAIN','https://cerebrohub.com/api/v1/update_main'),
        'update_reapply' => env('CEREBROHUB_API_URL_UPDATE_REAPPLY','https://cerebrohub.com/api/v1/update_reapply'),
        'unsubscribe' => env('CEREBROHUB_API_URL_UNSUBSCRIBE','https://cerebrohub.com/api/v1/unsubscribe'),
        'get_captcha' => env('CEREBROHUB_API_URL_GET_CAPTCHA','https://cerebrohub.com/api/v1/get_captcha'),
        'count_visitor' => env('CEREBROHUB_API_URL_COUNT_VISITOR','https://cerebrohub.com/api/v1/count_visitor'),
        'count_click' => env('CEREBROHUB_API_URL_COUNT_CLICK','https://cerebrohub.com/api/v1/count_click'),
        'mark_redirected' => env('CEREBROHUB_API_URL_MARK_REDIRECTED','https://cerebrohub.com/api/v1/mark_redirected'),
        'mark_denied' => env('CEREBROHUB_API_URL_MARK_DENIED','https://cerebrohub.com/api/v1/mark_denied'),
        'get_user' => env('CEREBROHUB_API_URL_GET_USER','https://cerebrohub.com/api/v1/user'),
        'get_bank' => env('CEREBROHUB_API_URL_GET_BANK','https://cerebrohub.com/api/v1/aba'),
        'get_location' => env('CEREBROHUB_API_URL_GET_LOCATION','https://cerebrohub.com/api/v1/location'),
        'validation_form' => env('CEREBROHUB_API_URL_VALIDATION_FORM','https://cerebrohub.com/api/v1/validation_form'),
        'validation_update_reapply' => env('CEREBROHUB_API_URL_VALIDATION_UPDATE_REAPPLY','https://cerebrohub.com/api/v1/validation_update_reapply'),
        'validation_update_main' => env('CEREBROHUB_API_URL_VALIDATION_UPDATE_MAIN','https://cerebrohub.com/api/v1/validation_update_main'),
        'save_error' => env('CEREBROHUB_API_URL_SAVE_ERROR','https://cerebrohub.com/api/v1/save_error'),
        'check_connection' => env('CEREBROHUB_API_URL_CHECK_CONNECTION','https://cerebrohub.com/api/v1/check_connection'),
        'check_status' => env('CEREBROHUB_API_URL_CHECK_STATUS','https://cerebrohub.com/api/v1/check_status'),
        'check_status_decision' => env('CEREBROHUB_API_URL_CHECK_STATUS_DECISION','https://cerebrohub.com/api/v1/check_status_decision'),
        'check_decision' => env('CEREBROHUB_API_URL_CHECK_DECISION','https://cerebrohub.com/api/v1/check_decision'),
        'save_step' => env('CEREBROHUB_API_URL_SAVE_STEP_VISITOR','https://cerebrohub.com/api/v1/save_step'),
        'save_customer_state' => env('CEREBROHUB_API_URL_SAVE_CUSTOMER_STATE','https://cerebrohub.com/api/v1/save_customer_state'),
        'recall' => env('CEREBROHUB_API_URL_RECALL','https://cerebrohub.com/api/v1/recall'),
        'check_timeout' => env('CEREBROHUB_API_URL_CHECK_TIMEOUT','https://cerebrohub.com/api/v1/check_timeout'),
        'credit_card' => env('CEREBROHUB_API_URL_CREDIT_CARD','https://cerebrohub.com/api/v1/credit_card'),
        'card_visit' => env('CEREBROHUB_API_URL_CREDIT_CARD_VISIT','https://cerebrohub.com/api/v1/credit_card/count_visit'),
        'card_click' => env('CEREBROHUB_API_URL_CREDIT_CARD_CLICK','https://cerebrohub.com/api/v1/credit_card/count_click'),
        'card_unsubscribe' => env('CEREBROHUB_API_URL_CARD_UNSUBSCRIBE','https://cerebrohub.com/api/v1/credit_card/unsubscribe'),
        'log_api_time' => env('CEREBROHUB_API_URL_LOG_API_TIME','https://cerebrohub.com/api/v1/log_api_time'),
        'get_click_id' => env('CEREBROHUB_API_URL_GET_CLICK_ID','https://cerebrohub.com/api/v1/get_click_id'),
        'action_type_visitor' => env('CEREBROHUB_API_ACTION_TYPE_VISITOR','https://cerebrohub.com/api/v1/action_type_visitor'),
        'get_reapply' => env('CEREBROHUB_API_GET_REAPPLY', 'https://cerebrohub.com/api/v1/get_reapply'),
    ],
];
