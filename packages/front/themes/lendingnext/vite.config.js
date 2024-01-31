import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import vue from '@vitejs/plugin-vue'
import path from "path";

    export default defineConfig({
    build: {
        minify: true,
        sourcemap: true,
    },
    plugins: [
        laravel({
            input: [
                "themes/lendingnext/sass/app.scss",
                "themes/lendingnext/js/main_form.js",
                "themes/lendingnext/js/unsubscribe.js",
                "themes/lendingnext/js/reapply.js",
                "themes/lendingnext/js/redirect.js",
                "themes/lendingnext/js/home.js",
                "themes/lendingnext/js/app.js",
                "themes/common/reject.js",
            ],
            buildDirectory: "lendingnext",
        }),
        vue({
            template: {
                transformAssetUrls: {
                    base: null,
                    includeAbsolute: false,
                },
            },
        }),
    ],
    resolve: {
        alias: {
            '~bootstrap': path.resolve('node_modules/bootstrap'),
            '~bootstrap-icons': path.resolve('node_modules/bootstrap-icons'),
        }
    },
});
