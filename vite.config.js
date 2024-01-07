// vite.config.js
import { defineConfig } from "vite";

export default defineConfig(({ mode }) => {
    return {
        base: mode === "gh-pages" ? "/kza-mobile/" : "/",
        build: {
            outDir: mode === "production" ? "prod" : "dist",
        },
    };
});
