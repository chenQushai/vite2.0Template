import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'
import {vuexModulesAutoload} from '@v3utils/vite-plugins'
// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        vue(),
        vuexModulesAutoload()
    ],
    base: './',
    server: {
        port: 3001,
        open: true,
        cors: true
    }
})
