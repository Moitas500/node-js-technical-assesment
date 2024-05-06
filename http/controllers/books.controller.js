import { BooksRepository } from "../../core/repositories/books.repository.js"

export const getBooks = async(req, res) => {
    const response = await BooksRepository.listBooks()
    res.status(200).json(response)
}
