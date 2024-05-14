export function generateBatchScript(config) {
  const scriptFile = `${config.slug}-${config.fmt}-helper.cmd`
  const courseDir = config.slug
  const playlistFile = `${config.slug}-${config.fmt}.m3u`
  const rootDir = "LinkedIn_Learning"
  const targetDir = `${rootDir}\\${courseDir}`

  let buffer = `@echo off\nrem ${scriptFile}\n`
  const dp0 = "%~dp0"
  buffer += `mkdir  "${dp0}${rootDir}"\n`
  buffer += `mkdir  "${dp0}${targetDir}"\n`
  let number = 0

  for (let sidx in config.sections) {
    const section = config.sections[sidx]
    for (let tidx in config.tocs[section.slug]) {
      const item = config.tocs[section.slug][tidx]
      const slug = item.slug
      const fmt = config.fmt
      let filename = `${slug}-${fmt}.mp4`
      let filenameVtt = `${slug}-${fmt}.vtt`
      if (config.enableFilenameIndex) {
        ++number
        filename = `${formatLeadingZeros(number)}-${filename}`
        filenameVtt = `${formatLeadingZeros(number)}-${filenameVtt}`
      }
      buffer += `move "${dp0}${filename}" "${dp0}${targetDir}"\n`
      buffer += `move "${dp0}${filenameVtt}" "${dp0}${targetDir}"\n`
    }
  }

  buffer += `move  "${dp0}${playlistFile}" "${dp0}${targetDir}"\n`
  if (config.exerciseFiles) {
    if (config.exerciseFiles.length > 0) {
      for (const exFile of config.exerciseFiles) {
        buffer += `move  "${dp0}${exFile.name}" "${dp0}${targetDir}"\n`
      }
    }
  }

  buffer += `del "${dp0}${scriptFile}"\n`

  return { filename: scriptFile, buffer: buffer }
}
