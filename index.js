import express, {json, urlencoded} from 'express'
import cors from 'cors'
import books from './http/routes/books.routes.js'
import genres from './http/routes/genres.routes.js'
import persons from './http/routes/persons.routes.js'
import {errorHandler} from './http/middlewares/error-handler.middleware.js'

const app = express()

app.use(json())
app.use(urlencoded({extended: false}))
app.use(cors())

app.use(errorHandler)

app.use('/api', books)
app.use('/api', genres)
app.use('/api', persons)

app.listen(3001)
console.log('Server on port 3001')
