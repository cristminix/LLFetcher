import createReactComponent from './actions/createReactComponent.mjs'

const argv = process.argv
const showHelp = f => {
    console.log('Welcome to artisan')
    console.log(createReactComponent.HELP)
}

const parseCmd = () => {

    return argv.length >= 3 ? argv[2] : null 
}

const processCmd = async (cmd) => {
    if(cmd === 'createReactComponent'){
        argv.splice(0,3)
        const [name, target_dir] = argv
        if(name && target_dir){
            await createReactComponent(name, target_dir)
        }else{
            console.log(createReactComponent.HELP)

        }
    }
}

const main = async () => {
    const cmd = parseCmd()

    if(cmd){
        await processCmd(cmd)
    }else{
        showHelp()
    }

    process.exit(0)
}

main()