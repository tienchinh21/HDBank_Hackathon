import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// https://vite.dev/config/
export default defineConfig({
    plugins: [react()],
    resolve: {
        alias: {
            '@': path.resolve(__dirname, 'src'),
            '@components': path.resolve(__dirname, 'src/components'),
            '@styles': path.resolve(__dirname, "src/assets/styles"),
            '@icon': path.resolve(__dirname, "src/assets/icons"),
            "@assets": path.resolve(__dirname, "src/assets"),
            "@apis": path.resolve(__dirname, "src/apis"),
            "@contexts": path.resolve(__dirname, "src/contexts"),
            "@routers": path.resolve(__dirname, "src/routers"),
        }
    },

})
