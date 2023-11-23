import config from "./actions.json" assert { type: "json" }
import {importActionModules, showHelp, getActionArgs, processAction} from "./fn.mjs"
// console.log(process.argv)

const main = async () => {
    // process.removeAllListeners('warning')

    let {argv} = process
    const {availables} = config
    
    const moduleActions = await importActionModules(availables)
    const actionName = getActionArgs(argv)

    if(actionName){
        await processAction(actionName, argv, moduleActions, availables)
    }else{
        showHelp(availables, moduleActions)
    }

    // process.exit(0)
}

main()