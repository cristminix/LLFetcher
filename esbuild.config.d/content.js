function getBuildOptions(isServe){
    let buildOptions = {
    entryPoints: getEntryPoints(),
    outdir: 'chrome_extension',
    bundle: true,
    tsconfig: 'tsconfig.json',
    format: 'esm',
  }

  return buildOptions;
}
function getEntryPoints(){
    return [
        'src/content_scripts/content.ts',
        // 'src/content_scripts/function.ts',
        'src/content_scripts/inject.ts',
        'src/content_scripts_inject/create_data_codes.js',
    ];
}
export {getBuildOptions,getEntryPoints};