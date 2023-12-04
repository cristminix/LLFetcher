import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { crx } from '@crxjs/vite-plugin'
import manifest from './manifest.json'
import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  server:{
    hmr:{
      port:5001
    },
    host:'127.0.0.1',
    port:5000
  },
  plugins: [react(),
    crx({ manifest })
  ],
  rollupOptions: {
    input: {
      // popup: resolve(__dirname, 'src/popup/popup.html'),
      // main: resolve(__dirname, 'popup.html'),
      // nested: resolve(__dirname, 'nested/index.html'),
    },
  },
  resolve: {
    alias: {
      buffer: 'rollup-plugin-node-polyfills/polyfills/buffer-es6',
      // process: 'rollup-plugin-node-polyfills/polyfills/process-es6'
    }
  },
  define: {
    // By default, Vite doesn't include shims for NodeJS/
    // necessary for segment analytics lib to work
    global: {},
  },
})
