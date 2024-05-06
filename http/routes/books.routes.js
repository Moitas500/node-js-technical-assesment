import express from 'express'
import { 
    createBook, 
    deleteBook, 
    getBooks, 
    updateBook
} from '../controllers/books.controller.js'

const router = express.Router()

router.get('/Books', getBooks)

router.post('/Books', createBook)

router.put('/Books/:id', updateBook)

router.delete('/Books/:id', deleteBook)

export default router