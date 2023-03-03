import express from 'express'
import mongoose from 'mongoose'
import routes from './routes'
import cors from 'cors'
import 'dotenv/config'

const app = express()

mongoose.connect('mongodb://localhost/firstapi')

app.use(cors())
app.use(express.json())
app.use(routes)

app.listen(process.env.PORT || 3333, () => {
  console.log(`Server rodando na porta ${process.env.PORT || 3333}`)
})
