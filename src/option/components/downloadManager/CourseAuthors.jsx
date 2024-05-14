import { authorUrlFromSlug } from "@/global/class/course-api/course_fn"

const CourseAuthors = ({ authors, noLinks = false }) => {
  return authors ? (
    <div className={`flex ${!noLinks ? "text-lg" : "text-md"}`}>
      <span className="italic mr-1 ">By</span>
      {authors.map((author, index) => {
        if (noLinks) {
          return (
            <h4 key={index}>
              {" "}
              {author.name}
              {index < authors.length - 1 ? ", " : ""}
            </h4>
          )
        }
        return (
          <h4 key={index}>
            {" "}
            <a
              className=""
              href={authorUrlFromSlug(author.slug)}
              target="_blank"
            >
              {author.name} <i className="fa fa-external-link" />
            </a>{" "}
            {index < authors.length - 1 ? ", " : ""}
          </h4>
        )
      })}
    </div>
  ) : (
    ""
  )
}

export default CourseAuthors
