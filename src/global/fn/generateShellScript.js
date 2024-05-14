export function generateShellScript(config) {
  const scriptFile = `${config.slug}-${config.fmt}-helper.sh`
  const courseDir = config.slug
  const playlistFile = `${config.slug}-${config.fmt}.m3u`
  const rootDir = "LinkedIn_Learning"
  const targetDir = `${rootDir}/${courseDir}`

  let buffer = "#!/usr/bin/sh\n"

  buffer += `mkdir -p ${rootDir}\n`
  buffer += `mkdir -p ${targetDir}\n`
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
      buffer += `mv -v ${filename} ${targetDir}\n`
      buffer += `mv -v ${filenameVtt} ${targetDir}\n`
    }
  }

  buffer += `mv -v ${playlistFile} ${targetDir}\n`
  if (config.exerciseFiles) {
    if (config.exerciseFiles.length > 0) {
      for (const exFile of config.exerciseFiles) {
        buffer += `mv -v ${exFile.name} ${targetDir}\n`
      }
    }
  }

  buffer += `rm -f ${scriptFile}\n`

  return { filename: scriptFile, buffer: buffer }
}
