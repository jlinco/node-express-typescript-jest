// import packages
import express, { Request, Response } from 'express'
import cors from 'cors'
import expressPino from 'express-pino-logger'
import { logger } from './config/Logger'
// initialize express application
const app = express()

// define app middleware
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(cors())
app.use(expressPino({ logger: logger }))

// default route test
app.get("/hello", (req: Request, res: Response) => {
  res.status(200).send({ requestUrl: req.url, message: 'Welcome to our node ts server' })
})

// do this to avoid app.address function not found issue when testing via supertest
module.exports = app.listen(5333, () => {
  logger.info(`Server has started...`)
})