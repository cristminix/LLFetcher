export function formatBytes(bytes) {
    if (bytes > 1024) return (bytes / 1024).toFixed(1) + 'K'
    return String(bytes)
  }