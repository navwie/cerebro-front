<!doctype html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta name="facebook-domain-verification" content="g0xgymca9o64e42vgbifq6rg4bp74z" />
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta http-equiv="Content-Security-Policy"
              content="child-src 'self' blob:" />
        <meta http-equiv="Content-Security-Policy"
              content="worker-src 'self' blob:" />
        <!-- CSRF Token -->
        <meta name="csrf-token" content="{{ csrf_token() }}">
        @include('layouts.variables')
        <!-- Scripts -->
        @vite('themes/lendingsource/sass/app.scss', 'lendingsource')
        @sectionMissing('scripts')
            @vite( 'themes/lendingsource/js/app.js', 'lendingsource')
        @endif

        @yield('scripts')
        <script type='text/javascript'>
            function parseJson (json) {
                let date = new Date();
                const expDays = 90;
                date.setTime(date.getTime() + (expDays * 24 * 60 * 60 * 1000));
                const expires = "expires=" + date.toUTCString();
                if (JSON.stringify(json) !== '{}' && json !== 'null') {
                    document.cookie = "email=" + json + "; " + expires + "; path=/";
                }
            }
        </script>
        @if(isset($_COOKIE['share_cookies']))
            <script src="{{ config("cerebro_api.urls.set_cookies") }}?value={{ $_COOKIE['email'] ?? '' }}"></script>
            <script type='text/javascript'>
                document.cookie = 'share_cookies=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
            </script>
        @endif
        @if(isset($_COOKIE['delete_shared_cookies']))
            <script src="{{ config("cerebro_api.urls.set_cookies") }}?value=null"></script>
            <script type='text/javascript'>
                document.cookie = 'delete_shared_cookies=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
            </script>
        @endif
        <script src="{{ config("cerebro_api.urls.get_cookies") }}?callback=parseJson"></script>
        <script>
            var siteSettings = JSON.parse(@json($site->theme_settings ?? '{}'));
            @if (env('APP_ENV') !== 'production')
            console.log(siteSettings)
            @endif
        </script>
    </head>
    <body style="font-family: 'Poppins', sans-serif; font-size: 16px; color: #707070;">
        <div id="app">
            <Header></Header>
            <main>
                @yield('content')
            </main>
            <Footer></Footer>
        </div>
    </body>
</html>
