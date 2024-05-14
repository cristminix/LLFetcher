import { findProp } from "./findProp"
import { getM3Rec } from "./getM3Rec"

export function getCourseSections(urn) {
  const m3Rec = getM3Rec()
  let secs = []

  let lac_key = urn
  let lac = findProp(lac_key, m3Rec)
  let secs_
  try {
    secs_ = lac.__data.contents
  } catch (e) {
    return secs
  }
  for (let i in secs_) {
    let sec_urn = secs_[i]["*section"]
    let sec = { items: [] }
    try {
      let sec_ = m3Rec[sec_urn].__data
      sec.title = sec_.title

      for (let j in sec_["*items"]) {
        let si_urn = sec_["*items"][j]
        try {
          let si_ = m3Rec[m3Rec[si_urn].__data.content.video].__data
          let si = {
            duration: si_.duration.duration,
            slug: m3Rec[si_.entityUrn].__data.slug,
            title: si_.title,
          }
          sec.items.push(si)
        } catch (e) {
          console.log(e)
        }
      }
      secs.push(sec)
    } catch (e) {
      console.log(e)
    }
  }
  return secs
}
