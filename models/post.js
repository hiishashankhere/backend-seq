import sequelize from '../config/database.js';
import { DataTypes, Model } from 'sequelize';

export const Post = sequelize.define('Post', {
    title: {
        type: DataTypes.STRING,
    },
    content: {
        type: DataTypes.TEXT,
    },
    userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: sequelize.models.User,
            key: 'id'
        }
    }
}, {
    paranoid: true,
})