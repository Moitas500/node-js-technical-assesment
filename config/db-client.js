import pg from 'pg'

export default new pg.Pool({
	host: process.env.DATABASE_HOST?.split(':')[0] || 'localhost',
	user: process.env.DATABASE_USERNAME || 'postgres',
	password: process.env.DATABASE_PASSWORD || '52463312',
	database: 'technical',
	port: process.env.DATABASE_HOST?.split(':')[1] || '5432',
	ssl: process.env.APP_ENV === 'production' ? {
		rejectUnauthorized: false,
	} : null,
})
