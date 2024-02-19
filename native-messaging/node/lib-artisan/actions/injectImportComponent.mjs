import path from "path"
import fs from "fs"
import {dashToCamelCase,writeFile} from "./lib.js"

const injectImportComponent = async (sourceComponentPath, destinationComponentPath) => {

    if(! await fs.existsSync(sourceComponentPath) ){
        console.error(`${sourceComponentPath} File Not Found`)
        process.exit(1)
    }
    if(! await fs.existsSync(destinationComponentPath) ){
        console.error(`${destinationComponentPath} File Not Found`)
        process.exit(1)
    }
    // 
    const dstDir = path.dirname(destinationComponentPath)
    // process.chdir(dstDir)
    let relativePath = path.relative(dstDir, sourceComponentPath);
    if(!relativePath.match(/^\./)){
        relativePath = `./${relativePath}`
    }
    const srcComponentName = path.basename(sourceComponentPath).replace(/\..*$/,'')
    
    if(relativePath.match(/\.jsx$/i) || relativePath.match(/\.tsx$/i)){
        relativePath = relativePath.replace(/(\.jsx|\.tsx)$/i,'')
    }
    
    const syntaxInject = `import ${srcComponentName} from "${relativePath}"`

    let dstBuffer = await fs.readFileSync(destinationComponentPath)
    dstBuffer = `${syntaxInject}\n${dstBuffer.toString()}`

    await writeFile(destinationComponentPath, dstBuffer, `Writing ${destinationComponentPath}`)

    // console.log(`relativePath is ${relativePath}`, syntaxInject)
}

export default injectImportComponent
    