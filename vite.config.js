import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'
import { fileURLToPath, URL } from 'node:url'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    input: {
      main: resolve(fileURLToPath(new URL('.', import.meta.url)), 'index.html'),
      replay: resolve(fileURLToPath(new URL('.', import.meta.url)), 'replay.html'),
      pp: resolve(fileURLToPath(new URL('.', import.meta.url)), 'pp.html'),
      // Add more endpoints here as needed
      // course: resolve(__dirname, 'course.html'),
      // signup: resolve(__dirname, 'signup.html'),
    },
  },
})
