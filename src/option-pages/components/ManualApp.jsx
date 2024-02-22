import { Link, useLoaderData } from "react-router-dom"
import { Component, createRef, useState, useEffect } from "react"
export async function loader({ params }) {
  const { module, fk, pageNumber } = params
  return { module, pageNumber, fk }
}

const ManualApp = ({ store, config }) => {
  const { module, pageNumber, fk } = useLoaderData()

  if (module == "dev-notes") {
    // return <NativeClient store={store} config={config} />
  } else {
    return <div className="manual-app">{module}</div>
  }
}

export default ManualApp
