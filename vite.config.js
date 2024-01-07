// vite.config.js
import { defineConfig } from "vite";

export default defineConfig(({ mode }) => {
    return {
        base: mode === "gh-pages" ? "/kza-website/" : "/",
        build: {
            outDir: mode === "production" ? "prod" : "dist",
        },
    };
});
