import * as child from 'child_process';

import { build } from 'esbuild';
import esbuildPluginBowserSync from 'esbuild-plugin-browser-sync';

import * as background from './esbuild.config.d/background.js';
import * as popup from './esbuild.config.d/popup.js';
import * as content from './esbuild.config.d/content.js';
import * as all from './esbuild.config.d/all.js';

const isServe = process.argv.includes('serve');
const isPopup = process.argv.includes('popup');
const isBackground= process.argv.includes('background');
const isContent= process.argv.includes('content');
const isAll= process.argv.includes('all');

let buildOptions = {};
let entryPoints = [];
if(isAll){
  buildOptions = all.getBuildOptions();
}else{
  
  if(isContent){
    buildOptions = {...content.getBuildOptions()};
    entryPoints = [...content.getEntryPoints()];
  }
  if(isBackground){
    buildOptions = {...content.getBuildOptions()};
    entryPoints = [...background.getEntryPoints()];
  }
  if(isPopup){
    buildOptions = {...popup.getBuildOptions()};
    entryPoints = [...popup.getEntryPoints()];
  }

  buildOptions.entryPoints = entryPoints;
}
buildOptions.outbase = 'src';
if(isServe){
  buildOptions.watch = {
    onRebuild(error, result) {
      if (error){ 
        console.error('watch build failed:', error);
      }
      else {
        console.log('watch build succeeded:', result);
        onRebuild(error);
      }
    },
  };
  buildOptions.plugins.push(esbuildPluginBowserSync({
    server: 'chrome_extension'
  }))
}else{
  buildOptions.sourcemap = false;
  buildOptions.minify = true;
}
function onRebuild(r){
  const proc = child.exec('./tools/shell_scripts/play_and_reload.sh');
  // proc.on('exit', function (code, signal) {
  //   console.log('child process exited with ' + `code ${code} and signal ${signal}`);
  // });
  proc.stdout.on('data', (data) => {
    console.log(`\n${data}`);
  });
  
  // proc.stderr.on('data', (data) => {
  //   console.error(`child stderr:\n${data}`);
  // });
}
build(buildOptions).then((r)=>{
  console.log(r);
  onRebuild(r);
});

// console.log(buildOptions);
// console.log(all.getEntryPoints());