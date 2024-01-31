<?php

namespace App\Http\Controllers\Api\v1;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Http;
use \Illuminate\Support\Facades\Request as ServerRequest;
class ApiController extends Controller
{

    protected function prepare_respons($response)
    {
        return response()->json($response->json(), $response->status());
    }

    protected function send_request($url, $request, $method, $additional_data = [], $make_log_time = false)
    {
        if ($make_log_time) {
            $log_data = $additional_data + $request->all();
            $action_type = explode('/',$url);
            $log_data['action_type'] = end($action_type);
            $log_data['request'] = json_encode($log_data);
            $log_api_time = Http::withHeaders(['Authorization' => $request->header('Authorization')])
                ->acceptJson()->timeout(3600)->post(config("cerebro_api.urls.log_api_time"), $log_data);
        }
        if ($method == 'get' || $method == 'GET') {
            $response = Http::withHeaders(['Authorization' => $request->header('Authorization')])
                ->acceptJson()->timeout(3600)->get($url, $additional_data + $request->all());
        } elseif ($method == 'post' || $method == 'POST') {
            $response = Http::withHeaders(['Authorization' => $request->header('Authorization')])
                ->acceptJson()->timeout(3600)->post($url,  $additional_data + $request->all());
        }
        if ($make_log_time) {
            Http::withHeaders(['Authorization' => $request->header('Authorization')])
                ->acceptJson()->timeout(3600)->post(config("cerebro_api.urls.log_api_time") . '/' . $log_api_time['id'], [
                    'response' => json_decode($response->getBody()->getContents(), true),
                    'invalid' => $response->getStatusCode() == 422 || $response->getStatusCode() == 429  ? 1 : 0,
                ]);
        }
        return $response;
    }

    public function store_reapply(Request $request)
    {
        $additional_data = [];
        $additional_data['user_agent'] = $request->header('user-agent');
        $additional_data['referring_url'] = url('/');
        $additional_data['ip_address'] = ServerRequest::server('HTTP_X_FORWARDED_FOR') ?? $request->ip();
        $response = $this->send_request(config("cerebro_api.urls.store_reapply"), $request, 'POST', $additional_data, true);
        return $this->prepare_respons($response);
    }

    public function search_main(Request $request)
    {
        $response = $this->send_request(config("cerebro_api.urls.search_main"), $request, 'GET', ['ip_address' => ServerRequest::server('HTTP_X_FORWARDED_FOR') ?? $request->ip()]);
        return $this->prepare_respons($response);
    }

    public function search_reapply(Request $request)
    {
        $additional_data = [
            'ip_address' => ServerRequest::server('HTTP_X_FORWARDED_FOR') ?? $request->ip(),
            'user_agent' => $request->header('user-agent'),
            'url' => $request->header('referer')
        ];
        $response = $this->send_request(config("cerebro_api.urls.search_reapply"), $request, 'POST', $additional_data);
        return $this->prepare_respons($response);
    }

    public function check_phone(Request $request)
    {
        $additional_data = [
            'url' => $request->header('referer')
        ];
        $response = $this->send_request(config("cerebro_api.urls.check_phone"), $request, 'POST', $additional_data);
        return $this->prepare_respons($response);
    }

    public function get_started(Request $request)
    {
        $additional_data = [
            'ip_address' => ServerRequest::server('HTTP_X_FORWARDED_FOR') ?? $request->ip(),
            'user_agent' => $request->header('user-agent'),
        ];
        $response = $this->send_request(config("cerebro_api.urls.get_started"), $request, 'POST', $additional_data);
        return $this->prepare_respons($response);
    }

    public function update_main(Request $request)
    {
        $additional_data = [];
        $additional_data['user_agent'] = $request->header('user-agent');
        $additional_data['referring_url'] = url('/');
        $additional_data['ip_address'] = ServerRequest::server('HTTP_X_FORWARDED_FOR') ?? $request->ip();
        $response = $this->send_request(config("cerebro_api.urls.update_main"), $request, 'POST', $additional_data, true);
        return $this->prepare_respons($response);
    }

    public function update_reapply(Request $request)
    {
        $additional_data = [];
        $additional_data['user_agent'] = $request->header('user-agent');
        $additional_data['referring_url'] = url('/');
        $additional_data['ip_address'] = ServerRequest::server('HTTP_X_FORWARDED_FOR') ?? $request->ip();
        $response = $this->send_request(config("cerebro_api.urls.update_reapply"), $request, 'POST', $additional_data, true);
        return $this->prepare_respons($response);
    }

    public function unsubscribe(Request $request)
    {
        $response = $this->send_request(config("cerebro_api.urls.unsubscribe"), $request, 'POST');
        return $this->prepare_respons($response);
    }

    public function get_captcha(Request $request)
    {
        $response = $this->send_request(config("cerebro_api.urls.get_captcha"), $request, 'GET');
        return $this->prepare_respons($response);
    }

    public function check_connection(Request $request)
    {
        $response = $this->send_request(config("cerebro_api.urls.check_connection"), $request, 'GET');
        return $this->prepare_respons($response);
    }

    public function check_status(Request $request){
        $response = $this->send_request(config("cerebro_api.urls.check_status"), $request, 'POST');
        return $this->prepare_respons($response);
    }

    public function check_status_decision(Request $request){
        $response = $this->send_request(config("cerebro_api.urls.check_status_decision"), $request, 'POST');
        return $this->prepare_respons($response);
    }


    public function check_decision(Request $request){
        $response = $this->send_request(config("cerebro_api.urls.check_decision"), $request, 'GET');
        return $this->prepare_respons($response);
    }

    public function count_visitor(Request $request)
    {
        $additional_data = [
            'ip_address' => ServerRequest::server('HTTP_X_FORWARDED_FOR') ?? $request->ip(),
            'user_agent' => $request->header('user-agent'),
            'url' => $request->header('referer')
        ];
        $response = $this->send_request(config("cerebro_api.urls.count_visitor"), $request, 'GET', $additional_data);
        return $this->prepare_respons($response);
    }

    public function count_click(Request $request)
    {
        $additional_data = [
            'ip_address' => ServerRequest::server('HTTP_X_FORWARDED_FOR') ?? $request->ip(),
            'user_agent' => $request->header('user-agent'),
            'url' => $request->header('referer')
        ];
        $response = $this->send_request(config("cerebro_api.urls.count_click"), $request, 'GET', $additional_data);
        return $this->prepare_respons($response);
    }

    public function mark_redirected(Request $request)
    {
        $response = $this->send_request(config("cerebro_api.urls.mark_redirected"), $request, 'GET');
        return $this->prepare_respons($response);
    }

    public function mark_denied(Request $request)
    {
        $response = $this->send_request(config("cerebro_api.urls.mark_denied"), $request, 'GET');
        return $this->prepare_respons($response);
    }

    public function get_user(Request $request)
    {
        $response = $this->send_request(config("cerebro_api.urls.get_user"), $request, 'GET');
        return $this->prepare_respons($response);
    }

    public function get_bank(Request $request)
    {
        $response = $this->send_request(config("cerebro_api.urls.get_bank"), $request, 'GET');
        return $this->prepare_respons($response);
    }

    public function get_location(Request $request)
    {
        $response = $this->send_request(config("cerebro_api.urls.get_location"), $request, 'GET');
        return $this->prepare_respons($response);
    }

    public function validation_form(Request $request)
    {
        $additional_data = [];
        $additional_data['user_agent'] = $request->header('user-agent');
        $additional_data['referring_url'] = url('/');
        $additional_data['ip_address'] = ServerRequest::server('HTTP_X_FORWARDED_FOR') ?? $request->ip();
        $response = $this->send_request(config("cerebro_api.urls.validation_form"), $request, 'POST', $additional_data);
        return $this->prepare_respons($response);
    }

    public function validation_update_reapply(Request $request)
    {
        $additional_data = [];
        $additional_data['user_agent'] = $request->header('user-agent');
        $additional_data['referring_url'] = url('/');
        $additional_data['ip_address'] = ServerRequest::server('HTTP_X_FORWARDED_FOR') ?? $request->ip();
        $response = $this->send_request(config("cerebro_api.urls.validation_update_reapply"), $request, 'POST', $additional_data);
        return $this->prepare_respons($response);
    }

    public function validation_update_main(Request $request)
    {
        $additional_data = [];
        $additional_data['user_agent'] = $request->header('user-agent');
        $additional_data['referring_url'] = url('/');
        $additional_data['ip_address'] = ServerRequest::server('HTTP_X_FORWARDED_FOR') ?? $request->ip();
        $response = $this->send_request(config("cerebro_api.urls.validation_update_main"), $request, 'POST', $additional_data);
        return $this->prepare_respons($response);
    }

    public function save_error(Request $request)
    {
        $response = $this->send_request(config("cerebro_api.urls.save_error"), $request, 'POST', ['user_agent' => $request->header('user-agent')]);
        return $this->prepare_respons($response);
    }

    public function save_step(Request $request)
    {
        $additional_data = [
            'ip_address' => ServerRequest::server('HTTP_X_FORWARDED_FOR') ?? $request->ip(),
            'user_agent' => $request->header('user-agent'),
        ];
        $response = $this->send_request(config("cerebro_api.urls.save_step"), $request, 'POST',$additional_data);
        return $this->prepare_respons($response);
    }

    public function save_customer_state(Request $request)
    {
        $additional_data = [
            'url' => $request->header('referer')
        ];
        $response = $this->send_request(config("cerebro_api.urls.save_customer_state"), $request, 'POST',$additional_data);
        return $this->prepare_respons($response);
    }

    public function recall(Request $request)
    {
        $response = $this->send_request(config("cerebro_api.urls.recall"), $request, 'GET');
        return $this->prepare_respons($response);
    }
    public function check_timeout(Request $request)
    {
        $response = $this->send_request(config("cerebro_api.urls.check_timeout"), $request, 'GET');
        return $this->prepare_respons($response);
    }

    public function store_credit_card(Request $request)
    {
        $additional_data = [
            'ip_address' => ServerRequest::server('HTTP_X_FORWARDED_FOR') ?? $request->ip(),
            'user_agent' => $request->header('user-agent'),
            'referring_url' => $request->header('referer')
        ];
        $response = $this->send_request(config("cerebro_api.urls.credit_card"), $request, 'POST', $additional_data);
        return $this->prepare_respons($response);
    }

    public function get_card_items(Request $request)
    {
        $response = $this->send_request(config("cerebro_api.urls.credit_card"), $request, 'GET');
        return $this->prepare_respons($response);
    }

    public function card_visit(Request $request)
    {
        $additional_data = [
            'ip_address' => ServerRequest::server('HTTP_X_FORWARDED_FOR') ?? $request->ip(),
            'user_agent' => $request->header('user-agent'),
            'url' => $request->header('referer')
        ];
        $response = $this->send_request(config("cerebro_api.urls.card_visit"), $request, 'POST', $additional_data);
        return $this->prepare_respons($response);
    }

    public function card_click(Request $request)
    {
        $response = $this->send_request(config("cerebro_api.urls.card_click"), $request, 'POST');
        return $this->prepare_respons($response);
    }
    public function card_unsubscribe(Request $request)
    {
        $response = $this->send_request(config("cerebro_api.urls.card_unsubscribe"), $request, 'POST');
        return $this->prepare_respons($response);
    }
    public function get_click_id(Request $request)
    {
        $additional_data = [
            'ip' => ServerRequest::server('HTTP_X_FORWARDED_FOR') ?? $request->ip(),
            'ua' => $request->header('user-agent'),
        ];
        $response = $this->send_request(config("cerebro_api.urls.get_click_id"), $request, 'POST', $additional_data);
        return $this->prepare_respons($response);
    }

    public function action_type_visitor(Request $request)
    {
        $response = $this->send_request(config("cerebro_api.urls.action_type_visitor"), $request, 'POST');
        return $this->prepare_respons($response);
    }

    public function get_reapply(Request $request)
    {
        $response = $this->send_request(config("cerebro_api.urls.get_reapply"), $request, 'GET');
        return $this->prepare_respons($response);
    }
}
