import {defineConfig} from 'vite';

export default defineConfig({
    server: {
        proxy: {
            '/': 'http://localhost:7000'
        }
    }
})
