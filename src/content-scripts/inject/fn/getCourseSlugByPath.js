export const getCourseSlugByPath = (path) => {
  let slug = ""
  try {
    path.split("/")
    slug = path.split("/")[1]
  } catch (e) {}

  return slug
}
