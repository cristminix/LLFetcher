import express from 'express'
import serveIndex from 'serve-index'

import {datasource} from "./data-source/index.js"
import routers from "./routes/routers.js"
import path from "path"

const app = express()

datasource.initialize().then(f=>{
  routers.attach(app, datasource)
}).catch(e=>{
  console.log(e)
})


const staticPath = path.join(".", '/src/cms/themes')
app.use('/themes', express.static(staticPath)); // Serve static files
app.use('/themes', serveIndex(staticPath, { 'icons': true }))
export const handler = app