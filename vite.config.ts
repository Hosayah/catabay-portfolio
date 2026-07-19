import { defineConfig } from 'vite'
import react, { reactCompilerPreset } from '@vitejs/plugin-react'
import babel from '@rolldown/plugin-babel'
import { resolve } from 'node:path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    babel({ presets: [reactCompilerPreset()] })
  ],
  build: {
    rollupOptions: {
      input: {
        home: resolve(__dirname, 'index.html'),
        projects: resolve(__dirname, 'projects/index.html'),
        experience: resolve(__dirname, 'experience/index.html'),
        stack: resolve(__dirname, 'stack/index.html'),
      },
    },
  },
})
