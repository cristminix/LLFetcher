// findBpr('$type','com.linkedin.learning.api.deco.content.ExerciseFile',bprStore,['sizeInBytes','name','url'],false)
export function findDS(k, v, src, props, list) {
  list = "undefined" === typeof list ? false : list
  let lists = []
  for (let i in src) {
    const obj = src[i]
    if ("undefined" !== typeof obj[k]) {
      if (obj[k] === v) {
        let rets = {}
        for (let j in props) {
          const prop = props[j]
          if ("undefined" !== typeof obj[prop]) {
            rets[prop] = obj[prop]
          } else {
            rets[prop] = null
          }
        }
        if (!list) {
          return rets
        } else {
          lists.push(rets)
        }
      }
    }
  }
  return lists
}
