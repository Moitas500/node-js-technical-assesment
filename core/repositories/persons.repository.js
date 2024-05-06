import {BaseRepository} from './base.repository.js'

const TABLE_NAME = 'persons';

export class PersonsRepository {

    static async listPersons() {
        return BaseRepository.dbSelectAll(TABLE_NAME)
    }

}
