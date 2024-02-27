import CourseAuthors from "./CourseAuthors"
import { courseUrlFromSlug, authorUrlFromSlug, isTimeExpired } from "@/global/course-api/course_fn"
import { getCode, getName } from "country-list"
import { useEffect, useState } from "react"
import CourseApi from "@/global/course-api/CourseApi"

const CourseInfo = ({ store, course, updateCourse, authors, selectedFmt, selectedTrans }) => {
  // console.log(course)
  const [thumbnailUrl, setThumbnailUrl] = useState(null)
  const displaySelectItem = (item, t = null) => {
    if (typeof item === "string") {
      if (item.match(/^select/i)) {
        return ""
      }
    }
    if (!t) {
      return item
    }
    if (item.match(/^\d/i)) {
      return item + "p"
    }
  }
  const countryCode = displaySelectItem(selectedTrans).toUpperCase()
  const countryName = getName(countryCode)
  const countryFlagUrl = `https://purecatamphetamine.github.io/country-flag-icons/3x2/${countryCode}.svg`
  const updateCourseThumbnail = async () => {
    const nCourseApi = new CourseApi(store)
    const nCourse = await nCourseApi.getCourseInfo(course.slug, true)
    updateCourse(nCourse)
  }
  const getThumbnailUrl = async () => {
    if (course) {
      // console.log(course)
      const thumbnails = store.get("Thumbnail").getListByCourseId(course.id)
      // console.log(thumbnails)
      if (thumbnails.length > 0) {
        const thumbnail = thumbnails[0]
        if (!isTimeExpired(thumbnail.expiresAt, false)) {
          const nThumbnailUrl = thumbnails[0].url
          setThumbnailUrl(nThumbnailUrl)
        } else {
          console.error("Thumbnail expired")
          console.log("updating thumbnail")
          updateCourseThumbnail()
        }
      }
    }
  }

  useEffect(() => {
    getThumbnailUrl()
  }, [course])
  return (
    <>
      <div className="course-info">
        <div className="flex">
          {thumbnailUrl ? (
            <div className="flex thumbnail-container pr-2 w-[1/4]">
              <img className="rounded rounded-md" src={thumbnailUrl} alt={course.title} />
            </div>
          ) : null}
          <div className="flex flex-col w-[3/4]">
            <div className="flex items-center">
              <div>
                <h4 className="text-2xl">
                  <i className="bi bi-bookmark"></i> {course.title}
                </h4>
              </div>
              <div className="p-2">
                <a className="" href={courseUrlFromSlug(course.slug)} target="_blank">
                  <i className="fa fa-external-link" />
                </a>
              </div>
            </div>
            <div className="flex items-center">
              <div>
                <CourseAuthors authors={authors} />
              </div>
              <div className="pl-2">{displaySelectItem(selectedFmt, "fmt")}</div>
              <div className="pl-2">
                {countryCode && !countryCode.match(/unavailable/i) ? (
                  <img title={countryName} className="w-[24px]" src={countryFlagUrl} alt={countryName} />
                ) : (
                  ""
                )}
              </div>
            </div>
            <div className="flex items-center">
              <p className="font-normal mb-2 w-[500px] line-clamp-4" title={course.description}>
                {course.description}
              </p>
            </div>
            {/* <span className="mb-2 w-[128px]">{course.description}</span> */}
          </div>
        </div>
      </div>
    </>
  )
}

export default CourseInfo
