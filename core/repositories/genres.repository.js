import {BaseRepository} from './base.repository.js'

const TABLE_NAME = 'genres';

export class GenresRepository {

    static async listGenres() {
        return BaseRepository.dbSelectAll(TABLE_NAME)
    }

}
