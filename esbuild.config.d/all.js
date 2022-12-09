import * as background from './background.js';
import * as popup from './popup.js';
import * as content from './content.js';

function getBuildOptions(){
    let buildOptions = {
        ...content.getBuildOptions(),
        ...background.getBuildOptions(),
        ...popup.getBuildOptions(),
    }

  buildOptions.entryPoints = getEntryPoints();  
  return buildOptions;
}
function getEntryPoints(){
    const entryPoints = [
        ...background.getEntryPoints(),
        ...popup.getEntryPoints(),
        ...content.getEntryPoints()
    ];
    return entryPoints;
}
export {getBuildOptions,getEntryPoints};