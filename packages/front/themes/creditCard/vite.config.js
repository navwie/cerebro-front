import {defineConfig} from 'vite';
import laravel from 'laravel-vite-plugin';
import vue from '@vitejs/plugin-vue'
import path from "path";

export default defineConfig({
    build: {
        minify: true,
    },
    plugins: [
        laravel({
            input: [
                "themes/creditCard/sass/app.scss",
                "themes/creditCard/js/app.js"
            ],
            buildDirectory: "creditCard",
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
