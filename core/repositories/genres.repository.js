import {BaseRepository} from './base.repository.js'

const TABLE_NAME = 'genres';

export class GenresRepository {

    static async listGenres() {
        return BaseRepository.dbSelectAll(TABLE_NAME)
    }

    static async createGenre( genre ) {
        return BaseRepository.dbInsert(TABLE_NAME, {
            name: genre.name
        })
    }

    static async updateGenre( genre ) {
        return BaseRepository.dbUpdateTable(TABLE_NAME, 
            {
                'name = $1': genre.name,
            },
            {
                'id = $2': genre.id
            }
        )
    }

    static async deleteGenre ( id ) {
        return BaseRepository.dbDeleteWhereAnd(TABLE_NAME, {
            'id = $1': id
        })
    }

}
