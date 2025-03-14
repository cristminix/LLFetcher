import {generateM3u} from "@/global/fn/generateM3u.js";
import {generateShellScript} from "@/global/fn/generateShellScript.js";
import {generateBatchScript} from "@/global/fn/generateBatchScript.js";

export function createDownloadFile(kind, config) {
  let fileObject = null
  let objectURL = null
  let anchor = document.createElement("a")

  if (kind == "playlist") {
    fileObject = generateM3u(config)
    objectURL = window.URL.createObjectURL(new Blob([fileObject.buffer]))
    anchor.download = fileObject.filename
  } else if (kind == "shell_script") {
    fileObject = generateShellScript(config)
    objectURL = window.URL.createObjectURL(new Blob([fileObject.buffer]))
    anchor.download = fileObject.filename
  } else if (kind == "batch_script") {
    fileObject = generateBatchScript(config)
    objectURL = window.URL.createObjectURL(new Blob([fileObject.buffer]))
    anchor.download = fileObject.filename
  }
  // else if(kind == 'exercise_file'){
  //     objectURL = config.exerciseFile.url
  //     anchor.download = config.exerciseFile.name
  //     anchor.target="_blank"

  // }
  // else if(kind == 'sourse_repo'){
  //     objectURL = config.sourceRepo
  //     anchor.download = config.sourceRepo
  // }

  anchor.href = objectURL
  anchor.click()
}
