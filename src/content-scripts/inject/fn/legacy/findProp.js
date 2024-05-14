export const findProp = (key, src) => {
  const regexObj = new RegExp("^" + key, "g")
  for (let k in src) {
    if (k.match(regexObj)) {
      return src[k]
    }
  }
  return null
}
