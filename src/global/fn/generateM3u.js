/* generateM3u({
 **      slug : string, // ${course.slug}-${downloadConfig.selectedFmtList}
 **      sections : Section[],
 **      downladConfig : DownloadConfig_tableField,
 ** })
 **/
export function generateM3u(config) {
  const playlistFile = `${config.slug}-${config.fmt}.m3u`

  let buffer = "#EXTM3U\n"
  let number = 0
  for (let sidx in config.sections) {
    const section = config.sections[sidx]
    for (let tidx in config.tocs[section.slug]) {
      const item = config.tocs[section.slug][tidx]
      const slug = item.slug
      const fmt = config.fmt
      let filename = `${slug}-${fmt}.mp4`
      if (config.enableFilenameIndex) {
        ++number
        filename = `${formatLeadingZeros(number)}-${filename}`
      }
      const duration = item.duration
      const filenameEncoded = encodeURI(filename)
      buffer += `#EXTINF:${duration},${filename}\n`
      buffer += `${filenameEncoded}\n`
    }
  }

  return { filename: playlistFile, buffer: buffer }
}
