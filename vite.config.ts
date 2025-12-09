import { defineConfig } from 'vite'
import path from 'path'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  resolve: {
    alias: {
      '@': path.resolve('.'),
    },
  },
  plugins: [tailwindcss(), react()],
  mode: "development",
  build: {
    minify: false,
  }
})
