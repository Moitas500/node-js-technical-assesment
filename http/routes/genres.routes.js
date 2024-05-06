import express from 'express'
import { getGenres } from '../controllers/genres.controller.js'

const router = express.Router()

router.get('/Genres', getGenres)

router.post('/Genres')

router.get('/Genres/:id')

router.put('/Genres/:id')

router.delete('/Genres/:id')

export default router