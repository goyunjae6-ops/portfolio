import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  // GitHub Pages serves this at /portfolio/, Vercel serves it at the domain root.
  base: process.env.VERCEL ? '/' : '/portfolio/',
  plugins: [react(), tailwindcss()],
})
