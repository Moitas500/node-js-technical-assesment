import { BooksRepository } from "../../core/repositories/books.repository.js"

export const getBooks = async(req, res) => {
    try {
        const response = await BooksRepository.listPersons()
        res.status(200).json(response)
    } catch (error) {
        res.status(500).json({
            message: 'Internal error'
        })
    }
}

export const createBook = async(req, res) => {
    await BooksRepository.createBook({
        name: req.body.name,
        date: req.body.date,
        author: req.body.author,
        genre: req.body.genre
    })
        .then( () => {
            res.status(201).json({
                message: 'Book created'
            })
        })
        .catch( (error) => {
            res.status(500).json({
                message: error
            })
        })
}

export const updateBook = async(req, res) => {
    await BooksRepository.updateBook({
        id: req.params.id,
        name: req.body.name,
        date: req.body.date,
        author: req.body.author,
        genre: req.body.genre
    })
        .then( () => {
            res.status(201).json({
                message: 'Book updated'
            })
        })
        .catch( (error) => {
            res.status(500).json({
                message: error
            })
        })
}

export const deleteBook = async(req, res) => {
    await BooksRepository.deleteBook(
        req.params.id
    )
        .then( () => {
            res.status(201).json({
                message: 'Book deleted'
            })
        })
        .catch( (error) => {
            res.status(500).json({
                message: error
            })
        })
}
