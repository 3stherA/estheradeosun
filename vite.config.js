import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/estheradeosun/', // Replace 'portfolio' with your repo name
  plugins: [react()],
})