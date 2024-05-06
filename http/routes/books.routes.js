import express from 'express'
import { getBooks } from '../controllers/books.controller.js'

const router = express.Router()

router.get('/Books', getBooks)

router.post('/Books')

router.get('/Books/:id')

router.put('/Books/:id')

router.delete('/Books/:id')

export default router