import watch from 'watch';
import {exec} from 'child_process';
import Play from 'play-sound'

const player = Play({})

const ignoredFiles = ['node_modules', 'vite.config.mjs','tools','__old','.git'];
let devServerIsRunning = false

const playSound = async () => {
  const proc = exec(`ffplay -autoexit -nodisp ./tools/shell_scripts/hero.wav`);  
}
const shouldReload = async () => {
  const proc = exec(`curl localhost:7700/reload`);
  proc.on('exit', function (code, signal) {
    if(code !== 0)
      console.log('child process exited with ' + `code ${code} and signal ${signal}`);
  });
  proc.stdout.on('data', (data) => {
    console.log(`${data}`);
  });
  playSound()
}

watch.watchTree('./', {
  filter: (path) =>  !ignoredFiles.includes(path)
}, (fileObjs) => {
  // console.log(Object.keys(fileObjs))

  if(typeof fileObjs === "string"){
    console.log(fileObjs)
    if(fileObjs.match(/^dist/)){
      console.log(`dist detected`)
      if(fileObjs.match(/app\.js$/) ||fileObjs.match(/learning\.js/) || fileObjs.match(/content\.js/)){
        shouldReload()
      }
    }else{
      shouldReload()

    }
  }
  if(!devServerIsRunning){
    exec('npm run dev', (_, output, err) => {
      if (output) console.log(output);
      if (err) console.log(err);
    })

    devServerIsRunning = true  
    shouldReload()

  }
  
})