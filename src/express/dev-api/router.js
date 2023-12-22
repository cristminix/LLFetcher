
import express, { Request, Router } from 'express'
import fs from 'fs'
const router = Router()
const baseDir = "src/express/dev-api/"

router.get('/test', (request, response) => {
  response.status(200).send({
    name: `test`,
    gender: 'Gender.Male',
  })
})

router.get('/course-info-ds.xml', (req, res) => {
  // Read the contents of the file
  fs.readFile(baseDir+'course-info-ds.xml', 'utf8', (err, data) => {
    if (err) {
      console.error(err)
      res.status(500).send('Internal Server Error')
      return
    }

    // Send the file contents as the response
    res.send(data)
  })
})

export default router