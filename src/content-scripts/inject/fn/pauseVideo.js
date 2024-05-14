export const pauseVideo = (timeout = 5000) => {
  detectVideoJs(() => {
    setTimeout(() => {
      document.querySelector("video").pause()
    }, timeout)
  })
}
