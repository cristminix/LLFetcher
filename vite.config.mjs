import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import {crx} from "@crxjs/vite-plugin"
import manifest from "./manifest.json" assert {type: 'json'}



export default defineConfig({
  build: {
    // target: 'esnext',
     minify: false,
     sourcemap: true
  },
  plugins: [
    react(), 
    crx({manifest}),
    
  ]
})
