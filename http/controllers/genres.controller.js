import { GenresRepository } from "../../core/repositories/genres.repository.js"

export const getGenres = async(req, res) => {
    try {
        const response = await GenresRepository.listPersons()
        res.status(200).json(response)
    } catch (error) {
        res.status(500).json({
            message: 'Internal error'
        })
    }
}

export const createGenre = async(req, res) => {
    await GenresRepository.createGenre({
        name: req.body.name,
    })
        .then( () => {
            res.status(201).json({
                message: 'Genre created'
            })
        })
        .catch( (error) => {
            res.status(500).json({
                message: error
            })
        })
}

export const updateGenre = async(req, res) => {
    await GenresRepository.updateGenre({
        id: req.params.id,
        name: req.body.name,
    })
        .then( () => {
            res.status(201).json({
                message: 'Genre updated'
            })
        })
        .catch( (error) => {
            res.status(500).json({
                message: error
            })
        })
}

export const deleteGenre = async(req, res) => {
    await GenresRepository.deleteGenre(
        req.params.id
    )
        .then( () => {
            res.status(201).json({
                message: 'Genre deleted'
            })
        })
        .catch( (error) => {
            res.status(500).json({
                message: error
            })
        })
}
