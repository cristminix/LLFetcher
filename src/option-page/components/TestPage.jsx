
import { Link, useLoaderData } from 'react-router-dom'
import {Component,createRef,useState,useEffect} from "react"

import FindDsTest  from "./testPage/FindDsTest"
import NativeClientTest from "./testPage/NativeClientTest"
import CourseApiTest from './testPage/CourseApiTest'
function dashToCamelCase(str) {
  return str.replace(/-([a-z])/g, function(match, letter) {
    return letter.toUpperCase();
  });
}
function capitalizeFirstLetter(str) {
  return str[0].toUpperCase() + str.slice(1);
}
export async function loader({ params }) {
  const { page } = params
  return { page }
}

const TestPage = ({store}) => {
  const {page} = useLoaderData()
  const getComponenentPage = page => {
    const components = {
      'course-api': <CourseApiTest store={store} page={page}/>,
      'find-ds': <FindDsTest store={store} page={page}/>,
      'native-client' : <NativeClientTest store={store}/>
    }    
    return components[page]
  }
  return (<><div className="test-page">
      {getComponenentPage(page)}
  </div></>)
}

export default TestPage