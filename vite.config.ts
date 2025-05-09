import { defineConfig } from "vite";
import laravel from "laravel-vite-plugin";
import tailwindcss from "@tailwindcss/vite";
import manifestSRI from "vite-plugin-manifest-sri";

export default defineConfig({
    plugins: [
        laravel({
            input: ["resources/css/app.css", "resources/ts/app.ts"],
            refresh: ["resources/ts/**/*", "resources/views/**/*"],
        }),
        tailwindcss(),
        manifestSRI(),
    ],
    resolve: {
        alias: {
            "@": "/resources/ts",
        },
    },
    server: {
        cors: true,
    },
});
