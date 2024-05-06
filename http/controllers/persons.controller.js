import { PersonsRepository } from "../../core/repositories/persons.repository.js"

export const getPersons = async(req, res) => {
    try {
        const response = await PersonsRepository.listPersons()
        res.status(200).json(response)
    } catch (error) {
        res.status(500).json({
            message: error
        })
    }
}

export const createAuthor = async(req, res) => {
    await PersonsRepository.createAuthor({
        name: req.body.name,
        age: req.body.age
    })
        .then( () => {
            res.status(201).json({
                message: 'Author created'
            })
        })
        .catch( (error) => {
            res.status(500).json({
                message: error
            })
        })
}

export const updateAuthor = async(req, res) => {
    await PersonsRepository.updateAuthor({
        id: req.params.id,
        name: req.body.name,
        age: req.body.age
    })
        .then( () => {
            res.status(201).json({
                message: 'Author updated'
            })
        })
        .catch( (error) => {
            res.status(500).json({
                message: error
            })
        })
}

export const deleteAuthor = async(req, res) => {
    await PersonsRepository.deleteAuthor(
        req.params.id
    )
        .then( () => {
            res.status(201).json({
                message: 'Author deleted'
            })
        })
        .catch( (error) => {
            res.status(500).json({
                message: error
            })
        })
}
