import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    host: true,      // expose sur 0.0.0.0 → accessible depuis le réseau local
    port: 5173,
    open: true,      // ouvre automatiquement le navigateur
  },
})
