import fs from 'fs'

const createReactComponent = async(name, target_dir) => {
    const componentFilename = `${name}.jsx`
    const componentPath = `${target_dir}/${componentFilename}`

    if(fs.existsSync(componentPath)){
        console.error(`${componentPath} already exists, please delete it first `)
        return
    }

    const componentContentBuffer = `
const ${name} = ({}) => {
    return (<><div className="${name.toLowerCase()}">
        Hello ${name}
    </div></>)
}

export default ${name}
    `


    
    try {
        const fileDescriptor = fs.openSync(componentPath, 'w'); // Open the file in write mode
        fs.writeSync(fileDescriptor, componentContentBuffer); // Write the data to the file
        fs.closeSync(fileDescriptor); // Close the file
        console.log(`creating react component ${name} to ${target_dir}`)
    } catch (error) {
        console.error(`failed to create react component ${name} to ${target_dir}`)
    }
}
createReactComponent.HELP = `createReactComponent <name> <target_dir>`
export default createReactComponent