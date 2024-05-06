import express from 'express'
import { 
    createAuthor, 
    deleteAuthor, 
    getPersons, 
    updateAuthor
} from '../controllers/persons.controller.js'

const router = express.Router()

router.get('/Person', getPersons)

router.post('/Person', createAuthor)

router.put('/Person/:id', updateAuthor)

router.delete('/Person/:id', deleteAuthor)

export default router