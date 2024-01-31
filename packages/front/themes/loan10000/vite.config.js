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
                "themes/loan10000/sass/app.scss",
                "themes/loan10000/js/main_form.js",
                "themes/loan10000/js/reapply.js",
                "themes/loan10000/js/redirect.js",
                "themes/loan10000/js/home.js",
                "themes/common/reject.js",
            ],
            buildDirectory: "loan10000",
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
