@if($site)
    <meta name="form-token" content="{{$site->token}}">
    <meta name="sentry-dns" content="{{ env('SENTRY_DNS_LENDINGSOURCE', '') }}">
    <title>{{$site->title}}</title>
    <link rel="icon" type="image/x-icon" href="">
    <meta name="flow-id" content="{{$site->flow_id}}">
@else
    <meta name="form-token" content="">
    <meta name="hero-image" content="">
    <meta name="logo-image" content="">
    <meta name="main-color" content="">
    <meta name="button-color" content="">
    <meta name="radio-button-color" content="">
    <meta name="radio-button-text-color" content="">
    <meta name="link-color" content="">
    <meta name="title" content="">
    <title>NotFound</title>
    <link rel="icon" type="image/x-icon" href="">
@endif

