import express from 'express'
import { 
    createGenre, 
    deleteGenre, 
    getGenres, 
    updateGenre
} from '../controllers/genres.controller.js'

const router = express.Router()

router.get('/Genres', getGenres)

router.post('/Genres', createGenre)

router.put('/Genres/:id', updateGenre)

router.delete('/Genres/:id', deleteGenre)

export default router