import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Simple configuration that works
export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,
    open: true
  }
})
