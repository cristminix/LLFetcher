import os from "os"
import { resolve } from 'path';
import { pathToFileURL } from 'url';
export function filepathToUrl(filePath){
    const platform = os.platform();
    console.log(`Platform: ${platform}`);
    if(platform==="win32"){
// Resolve the file path to an absolute path
const absolutePath = resolve(filePath);

// Convert the absolute path to a file URL
return pathToFileURL(absolutePath).href;
    }
}