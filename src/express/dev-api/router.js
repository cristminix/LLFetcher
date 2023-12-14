
import express, { Request, Router } from 'express'
const router = Router()


router.get('/test', (request, response) => {
  response.status(200).send({
    name: `test`,
    gender: 'Gender.Male',
  })
})

export default router