import express from 'express'
import { getPersons } from '../controllers/persons.controller.js'

const router = express.Router()

router.get('/Person', getPersons)

router.post('/Person')

router.get('/Person/:id')

router.put('/Person/:id')

router.delete('/Person/:id')

export default router