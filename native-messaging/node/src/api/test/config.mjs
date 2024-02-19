import os from 'os'
import fs from 'fs'

import AppConfig from '../AppConfig.js'

const DEFAULT_LOG_PATH = os.tmpdir() + '/llfetcher-native.log'

const main = async()=>{
    let BASEPATH = '.'
    let LOGPATH = DEFAULT_LOG_PATH
    const configDir = 'config'

    const dotHomeExists = await fs.existsSync('.home')

    if(!dotHomeExists){
        console.log('.home file not found exiting ...')
        process.exit(1)

    }
    const configDirExists = await fs.existsSync(configDir)
    if(!configDirExists){
        console.log('config dir not found exiting ...')
        process.exit(1)

    }
    const appConfig = AppConfig.getInstance()
    appConfig.setPath(configDir)
    await appConfig.load()
    console.log(appConfig.get('db.path'))
    /*
    let config = await loadConfig('app', configDir)
    
    config.app = fixConfigTemplateValue(config, config.app, 'app')
    
    let configDb = await loadConfig('db', configDir)
    config = {...config,...configDb}

    let configDbParsed = fixConfigTemplateValue(config, config.db, 'db')
    config.db = configDbParsed

    let configModule = await loadConfig('module', configDir)
    config = {...config,...configModule}

    let configModuleParsed = fixConfigTemplateValue(config, config.module, 'module')
    config.module = configModuleParsed
    console.log(config)
    */


}

main()