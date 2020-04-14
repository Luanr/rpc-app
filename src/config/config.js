require('dotenv').config();

module.exports = {
    development: {
        host: process.env.DB_HOST,
        username: process.env.DB_USER,
        password: process.env.DB_PASS,
        database: '',
        dialect: 'mysql'
    },
    test: {
        host: process.env.DB_HOST,
        username: process.env.DB_USER,
        password: process.env.DB_PASS,
        database: '',
        dialect: 'mysql'
    },
    production: {
        host: process.env.DB_HOST,
        username: process.env.DB_USER,
        password: process.env.DB_PASS,
        database: '',
        dialect: 'mysql'
    },
}