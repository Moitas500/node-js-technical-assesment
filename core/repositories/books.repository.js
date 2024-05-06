import {BaseRepository} from './base.repository.js'

const TABLE_NAME = 'books';

export class BooksRepository {

    static async listBooks() {
        return BaseRepository.dbSelectAll(TABLE_NAME)
    }

    static async createBook( book ) {
        return BaseRepository.dbInsert(TABLE_NAME, {
            name: book.name,
            date: book.date,
            author: book.author,
            genre: book.genre 
        })
    }

    static async updateBook( book ) {
        return BaseRepository.dbUpdateTable(TABLE_NAME, 
            {
                'name = $1': book.name,
                'date = $2': book.date,
                'author = $3': book.author,
                'genre = $4': book.genre
            },
            {
                'id = $5': book.id
            }
        )
    }

    static async deleteBook ( id ) {
        return BaseRepository.dbDeleteWhereAnd(TABLE_NAME, {
            'id = $1': id
        })
    }

}
