import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import fs from 'node:fs'
import path from 'node:path'

const repoBase = '/prymas_contracting_inc_demo.io/'

export default defineConfig({
  base: process.env.NODE_ENV === 'production' ? repoBase : '/',
  plugins: [
    react(),
    tailwindcss(),
    {
      name: 'spa-github-pages-fallback',
      closeBundle() {
        const dist = path.resolve(process.cwd(), 'dist')
        const index = path.join(dist, 'index.html')
        if (fs.existsSync(index)) {
          fs.copyFileSync(index, path.join(dist, '404.html'))
        }
      },
    },
  ],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/test/setup.ts',
    css: true,
  },
})
