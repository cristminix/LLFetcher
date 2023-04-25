import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import {crx} from "@crxjs/vite-plugin"

import manifest from "./manifest.json" assert {type: 'json'}
// https://vitejs.dev/config/
import * as child from 'child_process';



export default defineConfig({
  build: {
    // target: 'esnext',
     // minify: false,
  },
  plugins: [
    react(), 
    crx({manifest}),
    
  ]
})
