<!doctype html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta http-equiv="content-type" content="text/html; charset=utf-8"/>
        <!-- CSRF Token -->
        <meta name="csrf-token" content="{{ csrf_token() }}">
        @include('layouts.variables')
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        @vite(['themes/creditCard/sass/app.scss', 'themes/creditCard/js/app.js'], 'creditCard')
        <meta name="sentry-dns" content="{{ env('SENTRY_DNS_CARDS', '') }}">
    </head>
    <body id="body">
        <div id="wrapper" class="clearfix">
            @if(Route::getCurrentRoute()->uri() !== '/')
                <Header></Header>
            @endif
            <div id="app">
                @yield('content')
            </div>
            <Footer year="{{ date('Y') }}"></Footer>
        </div>
    </body>
</html>
