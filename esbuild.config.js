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

if(isServe){
  buildOptions.watch = {
    onRebuild(error, result) {
      if (error){ 
        console.error('watch build failed:', error);
      }
      else {
        console.log('watch build succeeded:', result);
      }
    },
  };
  buildOptions.plugins.push(esbuildPluginBowserSync({
    server: 'chrome_extension'
  }))
}

build(buildOptions);
// console.log(buildOptions);
// console.log(all.getEntryPoints());