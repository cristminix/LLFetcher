import { build } from 'esbuild';
import vue from 'esbuild-plugin-vue';
import { sassPlugin } from 'esbuild-sass-plugin';
import progress from 'esbuild-plugin-progress';
import postcss from 'postcss';
import autoprefixer from 'autoprefixer';
import postcssPresetEnv from 'postcss-preset-env';
import postcssImport from 'postcss-import';
import esbuildPluginBowserSync from 'esbuild-plugin-browser-sync';
// import {esbuildPluginFileSize}  from 'esbuild-plugin-filesize';

const isServe = process.argv.includes('serve');

const buildOptions = {
  entryPoints: ['src/popup/popup.ts'],
  outdir: 'chrome_extension',
  bundle: true,
  tsconfig: 'tsconfig.json',
  format: 'esm',
  sourcemap: true,
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
    progress()
  ]
}
if(isServe){
  buildOptions.watch = true;
  buildOptions.plugins.push(esbuildPluginBowserSync({
    server: 'chrome_extension'
  }))
}else{
  // buildOptions.plugins.push(esbuildPluginFileSize());
}
function buildPopup () {
  build(buildOptions);
}


buildPopup()
