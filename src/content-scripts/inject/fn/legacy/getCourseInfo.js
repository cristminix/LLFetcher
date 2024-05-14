import { getM3Rec } from "./getM3Rec"
import { getM3RecByType } from "./getM3RecByType"

export function getCourseInfo(slug) {
  const m3Rec = getM3Rec()

  if (m3Rec === null) {
    return null
  }

  let results = getM3RecByType(
    "com.linkedin.learning.api.deco.content.Course",
    m3Rec
  )

  let course = {
    title: "",
    slug: "",
    duration: 0,
    sourceCodeRepository: "",
    subtitle: "",
    description: "",
    urn: "",
    authors: [],
  }

  results = results.filter((result) => {
    let valid = false
    try {
      if (result.length > 1) {
        result = result.filter((item) => typeof item === "object")
        result = result[0]
        valid = result.slug === slug
      }
    } catch (e) {
      console.log(e)
    }
    return valid
  })

  if (results.length > 0) {
    const [urn, courseTmp] = results[0]
    course.title = courseTmp.title
    course.duration = courseTmp.duration.duration
    course.sourceCodeRepository = courseTmp.sourceCodeRepository
    course.subtitle = courseTmp.subtitle
    course.slug = courseTmp.slug
    course.urn = urn
    try {
      course.description = courseTmp.descriptionV2.text
    } catch (e) {}
  }

  results = getM3RecByType(
    "com.linkedin.learning.api.deco.content.Author",
    m3Rec
  )

  for (let authorIndex in results) {
    try {
      const [urn, authorTmp] = results[authorIndex]
      const author = {
        biography: authorTmp.biographyV2.text,
        shortBiography: authorTmp.shortBiographyV2.text,
        slug: authorTmp.slug,
        urn: urn,
      }

      course.authors.push(author)
    } catch (e) {
      console.log(e)
    }
  }

  return course
}
