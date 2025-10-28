import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';
import { createRequire } from 'module';

const require = createRequire(import.meta.url);

dotenv.config();

const sequelize = new Sequelize(process.env.DB_URL, {
    dialect: 'postgres',
    logging: false,
})


try {
    sequelize.authenticate()
    console.log('Database connected successfully.');
} catch (error) {
    console.error('Unable to connect to the database:', error);
}

export default sequelize;
