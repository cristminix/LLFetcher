
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

router.post('/menu/update', async(req, res) => {
  // Access the data sent in the request body
  let menu = req.body
  let isDelete = req.query.delete == "true"
  const sideMenuPath = `src/option-pages/side_menu.json`
  let sideMenuJson = JSON.parse(await fs.readFileSync(sideMenuPath).toString())
  if(menu.parent){
    const parentKey = menu.parent
    const slug = menu.slug
    if(isDelete){
      if(typeof sideMenuJson.links[parentKey].childItems !== "undefined"){
        delete sideMenuJson.links[parentKey].childItems[slug] 
      }
    }else{
      delete(menu.parent)
      delete(menu.slug)
      if(typeof sideMenuJson.links[parentKey].childItems == "undefined"){
        sideMenuJson.links[parentKey].childItems = {}
        sideMenuJson.hasChild=true
      }
      if(typeof sideMenuJson.links[parentKey].childItems[slug] === "object"){
        sideMenuJson.links[parentKey].childItems[slug] = Object.assign(sideMenuJson.links[parentKey].childItems[slug],menu)
      }else{
        sideMenuJson.links[parentKey].childItems[slug] = menu
      }
      if(sideMenuJson.links[slug]){
        delete(sideMenuJson.links[slug])
      }
    }
    

  }else{
    const slug = menu.slug
    if(isDelete){
      delete sideMenuJson.links[slug]
    }else{
      delete(menu.parent)
      delete(menu.slug)
      if(typeof sideMenuJson.links[slug] === "object"){
        sideMenuJson.links[slug] = Object.assign(sideMenuJson.links[slug],menu)

      }else{
        sideMenuJson.links[slug] = menu
      }
    }
    


  }
  await fs.writeFileSync(sideMenuPath,JSON.stringify(sideMenuJson,null,2))
  // Process the data (in this example, just send it back as a response)
  res.json({ message: 'Data received and processed successfully', data: menu ,sideMenuJson});
})
export default router