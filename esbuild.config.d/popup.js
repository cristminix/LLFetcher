// import { build } from 'esbuild';
import vue from 'esbuild-plugin-vue';
import { sassPlugin } from 'esbuild-sass-plugin';
import progress from 'esbuild-plugin-progress';
import postcss from 'postcss';
import autoprefixer from 'autoprefixer';
import postcssPresetEnv from 'postcss-preset-env';
import postcssImport from 'postcss-import';

function getBuildOptions(isServe){
    let buildOptions = {
    entryPoints: getEntryPoints(),
    outdir: 'chrome_extension',
    bundle: true,
    tsconfig: 'tsconfig.json',
    format: 'esm',
    // minify:true,
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
  

  return buildOptions;
}

function getEntryPoints(){
    return [
        'src/popup/popup.ts'
    ]
}
export {getBuildOptions,getEntryPoints};
  