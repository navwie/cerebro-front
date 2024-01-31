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
                "themes/lendingsource/sass/app.scss",
                "themes/lendingsource/js/main_form.js",
                "themes/lendingsource/js/unsubscribe.js",
                "themes/lendingsource/js/reapply.js",
                "themes/lendingsource/js/home.js",
                "themes/lendingsource/js/redirect.js",
                "themes/lendingsource/js/app.js",
                "themes/common/reject.js",
            ],
            buildDirectory: "lendingsource",
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
        }
    },
});
