import fs from "fs"
const importActionModules = async (availables) => {
    const actionModules = {}
    for(const actionName of Object.keys(availables)){
        // console.log(action)
        const modulePath = `./actions/${actionName}.mjs`
        // const moduleExists = await fs.existsSync(modulePath)
        // console.log(moduleExists)

        // if(!moduleExists){
        //     console.error(`WARN: ${modulePath} NOT EXISTS`)
        //     continue
        // }
        try{
            const moduleImport = await import(modulePath)
            // console.log(moduleImport)
            actionModules[actionName] = moduleImport.default
        }catch(e){
            console.error(e)
            // console.error(`${modulePath} ${e.code}`)
        }
        
        // console.log(actions[action])
    }

    return actionModules
}
const getFlagArgs = (flag,numFlag=2) =>{
    let flagSign = ('').repeat(numFlag)

    const {argv} = process
    for(let i in argv){
        const arg = argv[i]
        const regex = new RegExp(`${flagSign}${flag}`)
        if(arg.match(regex)){
            const argSplit = arg.split('=')
            const [flag, value] = argSplit
            return [true,value]
            break
        }
        // console.log(arg)
    }
    return [false, null]
}
const showHelp = (availables, moduleActions) => {
    console.log(`\nWelcome to Web Artisan v0.0.0\n`)
    console.log(`Available actions:\n`)
    const helps = Object.keys(availables).filter(item=>!item.match(/_\d+$/)).map(actionName => {
     
        let usageCmd = `${actionName} `
        const availableArguments = availables[actionName].arguments 
        for(let avaArgItem in availableArguments){
            const {required} = availableArguments[avaArgItem]
            usageCmd += required ? ` <${avaArgItem}>`:` [${avaArgItem}]`
        }

        return  usageCmd 
    })

    console.log(`  `+helps.join("\n  "))
    console.log(`\nPowered by Malink Corporation Inc. 2023\n`)
}

const getActionArgs = (argv) => {
    return argv.length >= 3 ? argv[2] : null 
}

const createHelpByAvaArgs = ( actionName, availableArguments, registry) => {
    let usageIntro = "Usage :"
    let usageCmd = `${actionName} `
    let usageBuffer = ""
    for(let avaArgItem in availableArguments){
        const {defaultValue, required, desc} = availableArguments[avaArgItem]
        usageCmd += required ? ` <${avaArgItem}>`:` [${avaArgItem}]`
        const displayDefault = !required? `(default ${defaultValue})`:''
        usageBuffer += `\t${avaArgItem} \t ${desc} ${displayDefault}\n`
    }

    return `${registry.desc??""}    
${usageIntro}
    ${usageCmd}
${usageBuffer}
`

}
const processAction = async (actionName, iArgv, actionModules, availables) => {
    let argv = iArgv 
    argv.splice(0,3)

    argv = argv.filter(a => !a.match(/^-/))

    if(!Object.keys(availables).includes(actionName)){
        console.error(`${actionName} is not valid action`)
        process.exit(1)
    }

    const inputArguments = []
    const availableArguments = availables[actionName].arguments
    let argIndex = 0
    for(let avaArgItem in availableArguments){
        const {defaultValue, required} = availableArguments[avaArgItem]
        // console.log(avaArgItem)
        
        // check arg is required and set from argv
        
        if(!argv[argIndex]){
            let breakArgRequired = true
            if(required){
                if(typeof required == 'object'){
                    if(Array.isArray(required.flagNotExists)){
                        for(const flagArgOpt of required.flagNotExists){
                            const [flag,flagLen] = flagArgOpt
                            const [flagPresent,flagValue] = getFlagArgs(flag, flagLen)
                            // console.log(flagPresent, flagValue)
                            if(flagPresent){
                                breakArgRequired = false
                            }
                        }
                    }
                }
                if(breakArgRequired){
                    //console.error(actionModules[actionName].HELP)
                    const help = createHelpByAvaArgs(actionName, availableArguments,availables[actionName])
                    console.error(help)
                    process.exit(1)
                }
                
            }
        }else{
            inputArguments[argIndex] = argv[argIndex]
        }

        // check if input arguments set or set to default 
        if(!required){
            if(!inputArguments[argIndex]){
                inputArguments[argIndex] = defaultValue
            }
        }

        argIndex += 1
    }
    // console.log(availableArguments)
    // console.log(inputArguments)
    await actionModules[actionName].apply(null, inputArguments)
}


export {importActionModules, showHelp, getActionArgs, processAction, getFlagArgs}