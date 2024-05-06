import {BaseRepository} from './base.repository.js'

const TABLE_NAME = 'books';

export class BooksRepository {

    static async listBooks() {
        return BaseRepository.dbSelectAll(TABLE_NAME)
    }

}
