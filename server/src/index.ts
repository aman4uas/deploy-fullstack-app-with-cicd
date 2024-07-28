import express, { Request, Response } from 'express'
import dotenv from 'dotenv'
import axios from 'axios'
import cors from 'cors'
dotenv.config()

const app = express()
const port = process.env.PORT || 4000

app.use(express.json())
app.use(cors({ origin: '*' }))

app.get('/', (req: Request, res: Response) => {
  res.status(200).send('Server is up and running !!')
})

app.get('/data', async (req: Request, res: Response) => {
  try {
    const JOKE_API = 'https://v2.jokeapi.dev/joke/Any?type=single'
    const response = await axios.get(JOKE_API)
    const joke = response.data.joke
    res.status(200).send(joke)
  } catch (error) {
    res.status(200).send('Ooops...Error fetching data from server !!')
  }
})

app.listen(port, () => {
  console.log(`Server is running on port ${port}`)
})
