@if($site)
    <meta name="form-token" content="{{$site->token}}">
    <meta name="title" content="{{$site->title}}">
    <link rel="icon" type="image/x-icon" href="">
    <meta name="sentry-dns" content="{{ env('SENTRY_DNS_LOAN10000', '') }}">
    <title>{{$site->title}}</title>
    <meta name="flow-id" content="{{$site->flow_id}}">
@else
    <meta name="form-token" content="">
    <meta name="hero-image" content="">
    <meta name="advantages-bg" content="">
    <meta name="comfort-bg" content="">
    <meta name="comfort-bg2" content="">
    <meta name="whyUs-bg" content="">
    <meta name="last-bg" content="">
    <meta name="logo-image" content="">
    <meta name="logo-footer-image" content="">
    <meta name="main-color" content="">
    <meta name="button-color" content="">
    <meta name="button-color-second" content="">
    <meta name="step-bar-color" content="">
    <meta name="link-color" content="">
    <meta name="radio-button-color" content="">
    <meta name="radio-button-text-color" content="">
    <meta name="title" content="">
    <title>NotFound</title>
    <link rel="icon" type="image/x-icon" href="">
@endif


