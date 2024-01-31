<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8"/>
    <meta name="viewport" content="width=device-width, initial-scale=1"/>

    @include('layouts.variables')
    <!-- Scripts -->
    @vite(['themes/lendingnext/sass/app.scss', 'themes/lendingnext/js/app.js'], 'lendingnext')
    <link
        href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&amp;display=swap"
        rel="stylesheet"
    />

    <link rel="icon" type="image/x-icon" href="{{ \App\Providers\MultidomainServiceProvider::getSiteParam('favicon') }}">
</head>

<body
    style="font-family: 'Poppins', sans-serif; font-size: 16px; color: #808080"
>
<div id="app" style="--main-button-color: {{ \App\Providers\MultidomainServiceProvider::getSiteParam('main_color') }};--link-color: {{ \App\Providers\MultidomainServiceProvider::getSiteParam('link_color') }};--main-color: {{ \App\Providers\MultidomainServiceProvider::getSiteParam('main_color') }};">
    <div class="header-section">
        <div class="container">
            <div>
                <div>
                    <nav class="navClaudio">
                        <a href="/">
                            <img
                                style="width: 200px; height: 40px"
                                src="{{ \App\Providers\MultidomainServiceProvider::getSiteParam('logo') }}"
                                class="logo"
                                alt="logo"
                            />
                        </a>
                    </nav>
                </div>
            </div>
        </div>
    </div>
    <main>
        <div
            style="max-width: 800px; margin: auto; height: 100vh; padding-top: 50px"
        >
            <div style="margin: auto; text-align: center">
                <img
                    style="width: 200px; height: 200px"
                    src="img/denied.png"
                    class="logo"
                    alt="logo"
                />
                <h1>
                    We are sorry, something went wrong.<br>
                    Contact us please.<br>
                    <EmailForm></EmailForm>
                </h1>
            </div>
        </div>
    </main>
</div>
<footer class="py-5">
</footer>

</body>
</html>
