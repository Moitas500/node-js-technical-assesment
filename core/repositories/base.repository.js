import dbClient from '../../config/db-client.js'

export class BaseRepository {

	static trimQuery(query) {
		return query.replace(/\s+/g, ' ')
	}

	static async dbInsert(tableName, values) {
		const columnNames = Object.keys(values)
		return dbClient.query(
			BaseRepository.trimQuery(`
				INSERT INTO ${tableName} (${columnNames.join(',')})
				VALUES (${columnNames.map((_, index) => '$' + (index + 1)).join(',')})
			`),
			Object.values(values),
		).then()
	}

	static async dbUpdateTable(tableName, columns, conditions) {
		return dbClient.query(
			BaseRepository.trimQuery(`
				UPDATE ${tableName}
				SET ${Object.keys(columns).join(', ')}
				WHERE ${Object.keys(conditions).join(' AND ')}
			`),
			[...Object.values(columns), ...Object.values(conditions)],
		).then()
	}

	static async dbSelectAll(tableName) {
		return dbClient.query(`SELECT * FROM ${tableName}`).then(it => it.rows)
	}

	static async dbSelectWhereAnd(tableName, conditions) {
		return dbClient.query(
			BaseRepository.trimQuery(`
				SELECT * FROM ${tableName}
				WHERE ${Object.keys(conditions).join(' AND ')}
			`),
			Object.values(conditions),
		).then(it => it.rows)
	}

	static async dbSelectColums(tableName, colums) {
		return dbClient.query(
			BaseRepository.trimQuery(`
				SELECT ${Object.values(colums).join(', ')}
				FROM ${tableName}
			`),
		).then(it => it.rows)
	}

	static async dbSelectColumsWhereAnd(tableName, columns, conditions) {
		return dbClient.query(
			BaseRepository.trimQuery(`
				SELECT ${Object.values(columns).join(', ')}
				FROM ${tableName}
				WHERE ${Object.keys(conditions).join(' AND ')}
			`),
			Object.values(conditions),
		).then(it => it.rows)
	}

	static async dbDeleteWhereAnd(tableName, conditions) {
		return dbClient.query(
			BaseRepository.trimQuery(`
				DELETE FROM ${tableName}
				WHERE ${Object.keys(conditions).join(' AND ')}
			`),
			Object.values(conditions),
		).then()
	}

}
