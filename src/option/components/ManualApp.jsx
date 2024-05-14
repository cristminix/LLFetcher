import { useLoaderData } from "react-router-dom"
import { useState, useEffect } from "react"

import ReactMarkdown from "react-markdown"
import { apiUrl } from "./native-client-app/fn"

import "@/global/css/markdown-viewer.css"

export async function loader({ params }) {
  const { mod, fk, pageNumber } = params
  return { mod, pageNumber, fk }
}

const ManualApp = ({ store, config }) => {
  const { mod, pageNumber, fk } = useLoaderData()
  const [markdown, setMarkdown] = useState("")
  const loadMarkdown = async (module) => {
    console.log(module)
    if (module == "dev-notes") {
      const url = apiUrl(["man/getFile", "DEV-NOTES.md"])
      const response = await fetch(url).then((response) => response.json())
      const text = response.content
      setMarkdown(text)
    }
  }
  useEffect(() => {
    loadMarkdown(mod)
  }, [mod])

  return (
    <article className="markdown-viewer">
      <ReactMarkdown>{markdown}</ReactMarkdown>
    </article>
  )
}

export default ManualApp
