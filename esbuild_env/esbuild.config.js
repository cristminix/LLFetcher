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

// 判断当前环境
const isServe = process.argv.includes('serve')
// 包名
const libraryName = 'fa-ui.js'

// 打包组件库
async function buildLibrary () {
  await build({
    entryPoints: ['packages/index.ts'],
    outfile: `lib/${libraryName}`,
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
      '.woff': 'file'
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

  await build({
    entryPoints: Object.values(components),
    outdir: 'lib/components',
    bundle: true,
    format: 'esm',
    tsconfig: 'tsconfig.json',
    treeShaking: true,
    minify: true,
    external: ['vue'],
    loader: {
      '.eot': 'dataurl',
      '.svg': 'dataurl',
      '.ttf': 'dataurl',
      '.woff': 'dataurl'
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
      progress()
    ]
  })

}
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
        server: 'LLFetcher'
      })
    ]
  })
}
// 打包预览页面
function buildExamples () {
  build({
    entryPoints: ['examples/main.ts'],
    outdir: 'examples/static',
    bundle: true,
    tsconfig: 'tsconfig.json',
    format: 'iife',
    watch: true,
    sourcemap: true,
    loader: {
      '.ts': 'ts',
      '.eot': 'file',
      '.svg': 'file',
      '.ttf': 'file',
      '.woff': 'file'
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
        server: 'examples'
      })
    ]
  })
}

// 启动函数
async function start () {
  if (isServe) {
    buildPopup()
  } else {
    buildLibrary()
  }
}

start()
