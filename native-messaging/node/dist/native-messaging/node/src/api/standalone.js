import express from 'express'
import bodyParser from 'body-parser'
import serveIndex from 'serve-index'
import 'reflect-metadata'
import cors from "cors"
import {datasource} from "./data-source/index.js"
import routers from "./routes/routers.js"
import path from "path"

const DEV_HOST = 'localhost'
const DEV_PORT = 7000
const API_PORT=7001

const app = express()
app.use(
    cors({
        origin: `http://${DEV_HOST}:${DEV_PORT}`, // Allow requests from a specific origin
        methods: ['GET', 'POST','OPTION'], // Allow only specific HTTP methods
    })
)
datasource.initialize().then(f=>{
    routers.attach(app, datasource)
}).catch(e=>{
    console.log(e)
})


const staticPath = path.join(".", '/src/cms/themes')
app.use('/themes', express.static(staticPath)); // Serve static files
app.use('/themes', serveIndex(staticPath, { 'icons': true }))


app.listen(API_PORT,f=>console.log(`API Server running ${API_PORT}`))
