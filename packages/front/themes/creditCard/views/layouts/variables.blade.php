@php
    /**
    * @var $site \App\Models\Sites
    */

   $site = \App\Providers\MultidomainServiceProvider::getSite();
@endphp

<meta name="form-token" content="{{$site->token}}">
<meta name="logo" content="{{$site->logo}}">
<meta name="hero-image" content="{{$site->hero}}">
<meta name="header" content="{{$site->header}}">
<meta name="sub-header" content="{{$site->sub_header}}">
<meta name="sub-header-color-text" content="{{$site->sub_header_color_text}}">
<meta name="sub-header-color" content="{{$site->sub_header_color}}">
<meta name="btn-text" content="{{$site->card_button_text}}">
<meta name="card-button-color-first" content="{{$site->card_button_color_first}}">
<meta name="card-button-color-second" content="{{$site->card_button_color_second}}">
<meta name="title" content="{{$site->title}}">
<title>{{$site->title}}</title>
<link rel="icon" type="image/x-icon" href="{{$site->favicon}}">



