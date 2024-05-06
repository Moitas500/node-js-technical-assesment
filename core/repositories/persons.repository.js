import {BaseRepository} from './base.repository.js'

const TABLE_NAME = 'persons';

export class PersonsRepository {

    static async listPersons() {
        return BaseRepository.dbSelectAll(TABLE_NAME)
    }

    static async createAuthor( author ) {
        return BaseRepository.dbInsert(TABLE_NAME, {
            name: author.name,
            age: author.age
        })
    }

    static async updateAuthor( author ) {
        return BaseRepository.dbUpdateTable(TABLE_NAME, 
            {
                'name = $1': author.name,
                'age = $2': author.age
            },
            {
                'id = $3': author.id
            }
        )
    }

    static async deleteAuthor ( id ) {
        return BaseRepository.dbDeleteWhereAnd(TABLE_NAME, {
            'id = $1': id
        })
    }
}
