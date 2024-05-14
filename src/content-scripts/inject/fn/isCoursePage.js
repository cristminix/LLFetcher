import jQuery from "jquery"
export const isCoursePage = () => {
  let valid =
    jQuery("div[data-avail-test]").attr("data-avail-test") === "page:course"

  return valid
}
