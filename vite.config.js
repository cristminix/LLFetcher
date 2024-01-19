import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { crx } from '@crxjs/vite-plugin'
import manifest from './manifest.json'
import { resolve } from 'path'
import express from 'vite-plugin-express'
import { fileURLToPath } from 'node:url'
import { nodePolyfills } from 'vite-plugin-node-polyfills'

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
    express({
      // the server files export a middleware as default
      // this config can be a glob
      middlewareFiles: './src/express/dev-api/router.js',
      prefixUrl: '/dev-api',
    }),
    crx({ manifest }),
    nodePolyfills()

  ],
  rollupOptions: {
    input: {
      // popup: resolve(__dirname, 'src/popup/popup.html'),
      // main: resolve(__dirname, 'popup.html'),
      // nested: resolve(__dirname, 'nested/index.html'),
    },
  },
  resolve: {
    alias:{
      buffer: 'rollup-plugin-node-polyfills/polyfills/buffer-es6'
    }
  },
  define: {
    // By default, Vite doesn't include shims for NodeJS/
    // necessary for segment analytics lib to work
    global: {},
  },
})
