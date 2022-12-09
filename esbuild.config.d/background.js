function getBuildOptions(isServe){
    let buildOptions = {
    entryPoints: getEntryPoints(),
    outdir: 'chrome_extension',
    bundle: true,
    tsconfig: 'tsconfig.json',
    format: 'esm',
    sourcemap: true
  }

  return buildOptions;
}
function getEntryPoints(){
    return [
        'src/service_workers/background.ts'
    ];
}
export {getBuildOptions,getEntryPoints};