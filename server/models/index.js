import Sequelize from 'sequelize';
require('dotenv').config()
console.log("env:" + process.env.DATABASE);
const sequelize = new Sequelize(
    process.env.DATABASE,
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