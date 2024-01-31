import {defineConfig} from 'vite';
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
                "themes/loan5000/sass/app.scss",
                "themes/loan5000/js/main_form.js",
                "themes/loan5000/js/unsubscribe.js",
                "themes/loan5000/js/reapply.js",
                "themes/loan5000/js/home.js",
                "themes/loan5000/js/redirect.js",
                "themes/loan5000/js/app.js",
                "themes/common/reject.js",
            ],
            buildDirectory: "loan5000",
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
