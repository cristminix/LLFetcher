export function calculateSpeed(loaded, startTime, endTime) {
  //Time taken in seconds
  let timeDuration = (endTime - startTime) / 1000
  //total bots
  let loadedBits = loaded
  let speedInBps = (loadedBits / timeDuration).toFixed(2)
  // let speedInKbps = (speedInBps / 1024).toFixed(2)
  // let speedInMbps = (speedInKbps / 1024).toFixed(2)

  // bitOutput.innerHTML += `${speedInBps}`
  // kboutput.innerHTML += `${speedInKbps}`
  // mboutput.innerHTML += `${speedInMbps}`

  return speedInBps
}
