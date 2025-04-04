import path from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue(), vueDevTools(), tailwindcss()],
  resolve: {
    alias: [
      { find: '@', replacement: path.resolve(__dirname, './src') },
      { find: '@utils', replacement: path.resolve(__dirname, './src/utils') },
      { find: '@stores', replacement: path.resolve(__dirname, './src/stores') },
      {
        find: '@icons',
        replacement: path.resolve(__dirname, './src/assets/icons'),
      },
      {
        find: '@images',
        replacement: path.resolve(__dirname, './src/assets/images'),
      },
      {
        find: '@components',
        replacement: path.resolve(__dirname, './src/components'),
      },
    ],
  },
})
