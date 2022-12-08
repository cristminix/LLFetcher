import { build } from 'esbuild'
import vue from 'esbuild-plugin-vue'
import { sassPlugin } from 'esbuild-sass-plugin'
import progress from 'esbuild-plugin-progress'
import {esbuildPluginFileSize}  from 'esbuild-plugin-filesize'
import postcss from 'postcss'
import autoprefixer from 'autoprefixer'
import postcssPresetEnv from 'postcss-preset-env'
import postcssImport from 'postcss-import'
import esbuildPluginBowserSync from 'esbuild-plugin-browser-sync'
import components from './components.js'

 
function buildPopup () {
  build({
    entryPoints: ['LLFetcher/src/popup/popup.ts'],
    outdir: 'LLFetcher/chrome_extension',
    bundle: true,
    tsconfig: 'tsconfig.json',
    format: 'esm',
    watch: true,
    sourcemap: true,
    // mainFields: ['module', 'main'],
    loader: {
      '.ts': 'ts',
      '.eot': 'file',
      '.svg': 'file',
      '.ttf': 'file',
      '.woff': 'file',
      '.woff2': 'file',
      '.css':'file'
    },
    plugins: [
      sassPlugin({
        async transform (source) {
          const { css } = await postcss([
            autoprefixer,
            postcssPresetEnv(),
            postcssImport()
          ]).process(source, { from: undefined })
          return css
        }
      }),
      vue(),
      progress(),
      esbuildPluginBowserSync({
        server: 'LLFetcher/chrome_extension'
      })
    ]
  })
}


buildPopup()
