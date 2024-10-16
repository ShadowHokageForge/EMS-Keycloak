import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { keycloakify } from "keycloakify/vite-plugin";

export default defineConfig({
    plugins: [
        react(),
        keycloakify({
            accountThemeImplementation: "none"
        })
    ],
    server: {
        fs: {
            deny: ['/secret-files', '/config']
        }
    }
});
