import { build } from 'esbuild'
import vue from 'esbuild-plugin-vue'
import { sassPlugin } from 'esbuild-sass-plugin'
import progress from 'esbuild-plugin-progress'
import {esbuildPluginFileSize}  from 'esbuild-plugin-filesize'
import postcss from 'postcss'
import autoprefixer from 'autoprefixer'
import postcssPresetEnv from 'postcss-preset-env'
import postcssImport from 'postcss-import'
// import esbuildPluginBowserSync from 'esbuild-plugin-browser-sync'
// import components from './components.js'
// import path_ from 'path'
// const {path} = path_

import path from 'path';
import {fileURLToPath} from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function buildPopup () {
  await build({
    entryPoints: ['src/popup/popup.ts'],
    outfile: 'chrome_extension/popup.js',
    bundle: true,
    format: 'esm',
    tsconfig: 'tsconfig.json',
    treeShaking: true,
    minify: true,
    external: ['vue'],
    loader: {
      '.eot': 'file',
      '.svg': 'file',
      '.ttf': 'file',
      '.woff': 'file',
      '.woff2': 'file'
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
      esbuildPluginFileSize()
    ]
  })
}

buildPopup();

