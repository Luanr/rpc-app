import Dotenv from 'dotenv';
import Sequelize from 'sequelize';

Dotenv.config();

export const sequelize = new Sequelize('rpcchallenge', process.env.DB_USER, process.env.DB_PASS, {
    host: process.env.DB_HOST,
    dialect: 'mysql'
})