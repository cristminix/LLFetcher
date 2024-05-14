export const makeDelay = (ms) => {
  let timer = 0
  return function (callback) {
    clearTimeout(timer)
    timer = setTimeout(callback, ms)
    return timer
  }
}
