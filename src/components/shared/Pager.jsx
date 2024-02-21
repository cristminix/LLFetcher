// import {v4} from "uuid"
import { useState } from "react"
import { Link } from "react-router-dom"
export class ArrayPager {
  source = null
  limit = 5
  page = 1
  totalRecords = 0
  totalRecordsFiltered = 0

  totalPages = 0
  totalPagesFiltered = 0

  constructor(source, limit) {
    // console.log('ArrayPager.constructor()')
    this.source = source
    this.limit = limit

    this.calculate()
    // console.log(this.totalRecords)
    // console.log(this.totalPages)
  }

  fetch(page, filter) {
    // console.log(offset,this.limit)
    let res
    let sourceCopy = Object.assign([], this.source)
    if (typeof filter == "string") {
      filter = filter.replace(/\W/g, "")
      const qRegex = new RegExp(`${filter}`)
      sourceCopy = sourceCopy.filter((icon) => icon.match(qRegex))
      this.calculate(filter, sourceCopy)

      if (page > this.totalPagesFiltered) {
        page = this.totalPagesFiltered
      }
    }
    // else {
    const offset = (page - 1) * this.limit

    res = sourceCopy.splice(offset, this.limit)
    // }// console.log(res)
    return res
  }

  calculate(filter, sourceCopy) {
    if (typeof filter == "string") {
      this.totalRecordsFiltered = sourceCopy.length
      this.totalPagesFiltered = Math.ceil(this.totalRecordsFiltered / this.limit)
      return this
    }
    this.totalRecords = this.source.length
    this.totalPages = Math.ceil(this.totalRecords / this.limit)
    return this
  }

  getTotalPages(filter) {
    if (typeof filter == "string") {
      return this.totalPagesFiltered
    }
    return this.totalPages
  }

  getTotalRecords(filter) {
    if (typeof filter == "string") {
      return this.totalRecordsFiltered
    }
    return this.totalRecords
  }
}
export default function Pager({ limit, total_pages, page, gotoPage, path = "", onRefresh }) {
  const name = "pager"
  const [isLoading, setLoading] = useState(false)
  page = parseInt(page)
  total_pages = parseInt(total_pages)
  limit = parseInt(limit)
  const hasPrev = (page_number) => {
    if (!total_pages) return false
    if (page_number > total_pages) return false
    return page_number > 1
  }
  const hasNext = (page_number) => {
    if (!total_pages) return false
    if (page_number > total_pages) return false
    return page_number < total_pages
  }
  const forPages = () => {
    const pages = []
    for (let i = 0; i < total_pages; i++) {
      pages.push(i + 1)
    }
    return pages
  }
  return (
    <nav className="flex items-center place-content-center space-x-2" key={name}>
      {hasPrev(page) ? (
        <Link key={`${name}-min-1`} className="text-gray-500 hover:text-blue-600 p-4 inline-flex items-center gap-2 rounded-md" to={`${path}/page/${page - 1}`}>
          <span aria-hidden="true">«</span>
          <span>Sebelum</span>
        </Link>
      ) : (
        ""
      )}
      {forPages().map((page_number, index) => {
        const isActive = page_number == page
        return isActive ? (
          <Link
            key={`${name}-num-${index}`}
            className="w-10 h-10 bg-blue-500 text-white p-4 inline-flex items-center text-sm font-medium rounded-full"
            aria-current="page"
            to={`${path}/page/${page_number}`}
          >
            {page_number}
          </Link>
        ) : (
          <Link
            key={`${name}-num-${index}`}
            to={`${path}/page/${page_number}`}
            className="w-10 h-10 text-gray-500 hover:text-blue-600 p-4 inline-flex items-center text-sm font-medium rounded-full"
          >
            {page_number}
          </Link>
        )
      })}
      {hasNext(page) ? (
        <Link
          key={`${name}-plus-1`}
          className="text-gray-500 hover:text-blue-600 p-4 inline-flex items-center gap-2 rounded-md"
          to={`${path}/page/${page + 1}`}
        >
          <span>Berikutnya</span>
          <span aria-hidden="true">»</span>
        </Link>
      ) : (
        ""
      )}
      {typeof onRefresh == "function" ? (
        <button
          key={`${name}-refresh-1`}
          className={"btn-blue pl-[14px] rounded-full " + (isLoading ? "animate-spin" : "")}
          onClick={(e) => onRefresh(e, setLoading)}
        >
          <i className="bi bi-arrow-repeat" />
        </button>
      ) : (
        ""
      )}
    </nav>
  )
}
