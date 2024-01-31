<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\v1\ApiController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::group((['prefix' => 'v1']), function() {
    Route::post('form', [ApiController::class, 'store_reapply'])->name('form');
    Route::get('search_main', [ApiController::class, 'search_main'])->name('search_main');
    Route::post('search_reapply', [ApiController::class, 'search_reapply'])->name('search_reapply');
    Route::post('check_phone', [ApiController::class, 'check_phone'])->name('check_phone');
    Route::post('get_started', [ApiController::class, 'get_started'])->name('get_started');
    Route::post('update_main', [ApiController::class, 'update_main'])->name('update_main');
    Route::post('update_reapply', [ApiController::class, 'update_reapply'])->name('update_reapply');
    Route::post('unsubscribe', [ApiController::class, 'unsubscribe'])->name('unsubscribe');
    Route::get('get_captcha', [ApiController::class, 'get_captcha'])->name('get_captcha');
    Route::get('count_visitor', [ApiController::class, 'count_visitor'])->name('count_visitor');
    Route::get('count_click', [ApiController::class, 'count_click'])->name('count_click');
    Route::get('mark_redirected', [ApiController::class, 'mark_redirected'])->name('mark_redirected');
    Route::get('mark_denied', [ApiController::class, 'mark_denied'])->name('mark_denied');
    Route::get('user', [ApiController::class, 'get_user'])->name('get_user');
    Route::get('aba', [ApiController::class, 'get_bank'])->name('get_bank');
    Route::get('location', [ApiController::class, 'get_location'])->name('get_location');
    Route::post('validation_form', [ApiController::class, 'validation_form'])->name('validation_form');
    Route::post('validation_update_reapply', [ApiController::class, 'validation_update_reapply'])->name('validation_update_reapply');
    Route::post('validation_update_main', [ApiController::class, 'validation_update_main'])->name('validation_update_main');
    Route::post('save_error', [ApiController::class, 'save_error'])->name('save_error');
    Route::get('check_connection', [ApiController::class, 'check_connection'])->name('check_connection');
    Route::post('check_status', [ApiController::class, 'check_status'])->name('check_status');
    Route::post('check_status_decision', [ApiController::class, 'check_status_decision'])->name('check_status_decision');
    Route::get('check_decision', [ApiController::class, 'check_decision'])->name('check_decision');
    Route::post('save_step', [ApiController::class, 'save_step'])->name('save_step');
    Route::post('save_customer_state', [ApiController::class, 'save_customer_state'])->name('save_customer_state');
    Route::get('recall', [ApiController::class, 'recall'])->name('recall')->middleware('recall');
    Route::get('check_timeout', [ApiController::class, 'check_timeout'])->name('check_timeout');
    Route::post('credit_card', [ApiController::class, 'store_credit_card'])->name('store_credit_card');
    Route::get('credit_card', [ApiController::class, 'get_card_items'])->name('get_card_items');
    Route::post('/credit_card/count_visitor', [ApiController::class, 'card_visit'])->name('card_visit');
    Route::post('/credit_card/count_click', [ApiController::class, 'card_click'])->name('card_click');
    Route::post('/credit_card/unsubscribe', [ApiController::class, 'card_unsubscribe'])->name('card_unsubscribe');
    Route::post('/get_click_id', [ApiController::class, 'get_click_id'])->name('get_click_id');
    Route::post('/action_type_visitor', [ApiController::class, 'action_type_visitor'])->name('action_type_visitor');
    Route::post('/get_reapply', [ApiController::class, 'get_reapply'])->name('get_reapply');
    Route::get('check_ip', function () {
        return 'IP:' . \Illuminate\Support\Facades\Request::server('HTTP_X_FORWARDED_FOR') . '| SECOND_IP:' . $_SERVER['HTTP_X_FORWARDED_FOR'];
    });
});
