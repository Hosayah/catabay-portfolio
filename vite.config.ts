import { defineConfig } from 'vite'
import react, { reactCompilerPreset } from '@vitejs/plugin-react'
import babel from '@rolldown/plugin-babel'
import { resolve } from 'node:path'
import { readdirSync } from 'node:fs'

const blogDirectory = resolve(__dirname, 'blogs')
const blogInputs = Object.fromEntries(
  readdirSync(blogDirectory, { withFileTypes: true })
    .filter((entry) => entry.isDirectory())
    .map((entry) => [`blog-${entry.name}`, resolve(blogDirectory, entry.name, 'index.html')]),
)

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
        blogs: resolve(__dirname, 'blogs/index.html'),
        ...blogInputs,
      },
    },
  },
})
