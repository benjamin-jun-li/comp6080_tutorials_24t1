/// <reference types="vitest" />
/// <reference types="vite/client" />

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    global: true,
    environment: 'jsdom',
    setupFiles: './src/setup.js',
  },
  server: {
    port: 3000,
  },
})
