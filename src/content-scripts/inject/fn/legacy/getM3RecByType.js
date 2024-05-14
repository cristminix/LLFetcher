export const getM3RecByType = (type, m3Rec) => {
  let results = []
  for (let m in m3Rec) {
    if ("undefined" !== typeof m3Rec[m]._data.$type) {
      if (m3Rec[m]._data.$type == type) {
        results.push([m, m3Rec[m]._data])
      }
    }
  }
  return results
}
