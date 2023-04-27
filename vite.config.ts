import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({ 
      registerType: 'prompt',
      // include public directory files here
      includeAssets: ['vite.svg'],
      // include webpack-loaded files here
      workbox: {
       globPatterns: ['**/*.{js,css,html}', 'assets/*.svg'],
      },
      // enable sw on development
      devOptions: {
        enabled: true
      }
    })
  ],
})
