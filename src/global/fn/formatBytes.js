export const formatBytes = (bytes) => {
  // bytes = parseInt(bytes)

  if (bytes === 0) {
    return "0 Bytes"
  }

  const sizes = ["Bytes", "KB", "MB", "GB", "TB"]
  let i = Math.floor(Math.log(bytes) / Math.log(1024))
  let formattedValue = parseFloat((bytes / Math.pow(1024, i)).toFixed(2))
  if (isNaN(formattedValue) || !isFinite(bytes)) {
    formattedValue = 0
    i = 0
  }
  return `${formattedValue} ${sizes[i]}`
}
