

/* generateShellScript({
**      slug : string, // ${course.slug}-${downloadConfig.selectedFmtList}
**      sections : Section[],
**      downladConfig : DownloadConfig_tableField,
**      exerciseFile : ExerciseFile_tableField,
** })
**/
function generateShellScript(config){

    const scriptFile = `${config.slug}-${config.downloadConfig.selectedFmtList}-helper.sh`;
    const courseDir = config.slug;
    const playlistFile = `${config.slug}-${config.downloadConfig.selectedFmtList}.m3u`;
    const rootDir = 'LinkedIn_Learning';
    const targetDir = `${rootDir}/${courseDir}`;

    let buffer = "#!/usr/bin/sh\n";
    
    buffer += `mkdir -p ${rootDir}\n`;
    buffer += `mkdir -p ${targetDir}\n`;

    for(let sectionIndex in config.sections){
        for(let itemIndex in config.sections[sectionIndex].items){
            const item = config.sections[sectionIndex].items[itemIndex];
            const slug = item.slug;
            let fmt = config.downloadConfig.selectedFmtList;
           
            const filename = `${slug}-${fmt}.mp4`;
            const filenameVtt = `${slug}-${fmt}.vtt`;

            buffer += `mv -v ${filename} ${targetDir}\n`;
            buffer += `mv -v ${filenameVtt} ${targetDir}\n`;
        }
    }

    buffer += `mv -v ${playlistFile} ${targetDir}\n`;

    if('string' === typeof config.exerciseFile.name){
        buffer += `mv -v ${config.exerciseFile.name} ${targetDir}\n`;
    }
    buffer += `rm -f ${scriptFile}\n`;

    return {filename:scriptFile, buffer:buffer};

}
/* generateM3u({
**      slug : string, // ${course.slug}-${downloadConfig.selectedFmtList}
**      sections : Section[],
**      downladConfig : DownloadConfig_tableField,
** })
**/
function generateM3u(config){
    const playlistFile = `${config.slug}-${config.downloadConfig.selectedFmtList}.m3u`;

    let buffer = "#EXTM3U\n";
    
    for(let sectionIndex in config.sections){
        for(let itemIndex in config.sections[sectionIndex].items){
            const item = config.sections[sectionIndex].items[itemIndex];
            const slug = item.slug;
            const fmt = config.downloadConfig.selectedFmtList;
            const filename = `${slug}-${fmt}.mp4`;
            const duration = item.duration;
            const filenameEncoded = encodeURI(filename);
            buffer += `#EXTINF:${duration},${filename}\n`;
            buffer += `${filenameEncoded}\n`
        }
    }

    return {filename: playlistFile,buffer:buffer};
    
}

function createDownloadFile(kind,config){
    let fileObject = null;
    let objectURL = null;
    let anchor = document.createElement('a');

    if(kind == 'playlist'){
        fileObject = generateM3u(config);
        objectURL = window.URL.createObjectURL(new Blob([fileObject.buffer]));
        anchor.download = fileObject.filename;
    }
    else if(kind == 'shell_script'){
        fileObject = generateShellScript(config);
        objectURL = window.URL.createObjectURL(new Blob([fileObject.buffer]));
        anchor.download = fileObject.filename;
    }
    else if(kind == 'batch_script'){
        fileObject = generateShellScript(config);
        objectURL = window.URL.createObjectURL(new Blob([fileObject.buffer]));
        anchor.download = fileObject.filename;
    }
    else if(kind == 'exercise_file'){
        objectURL = config.exerciseFile.url;   
        anchor.download = config.exerciseFile.name;
    }
    
    
    anchor.href = objectURL;
    anchor.click();
}

export {
    generateShellScript,
    generateM3u,
    createDownloadFile
}