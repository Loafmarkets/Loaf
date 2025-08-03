import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import fs from 'fs'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true,
    allowedHosts: [
      'localhost',
      '5ed0-2001-8003-222e-1700-1d0-2f99-6a37-a964.ngrok-free.app',
      '2edb-2001-8003-222e-1700-1d0-2f99-6a37-a964.ngrok-free.app',
      '34bf-2001-8003-222e-1700-3586-3980-1049-7016.ngrok-free.app'
    ],
    cors: true
  }
})
