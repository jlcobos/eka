import Sequelize from 'sequelize';
require('dotenv').config();

const sequelize = new Sequelize(
    process.env.DATABASE,
    process.env.DATABASE_URL,
    process.env.DATABASE_USER,
    process.env.DATABASE_PASSWORD,
    {
    dialect: 'postgres',
    },
);

const models = {
    User: sequelize.import('./user'),
};

export { sequelize };

export default models;