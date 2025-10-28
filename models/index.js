'use strict';

import fs from 'fs';
import path from 'path';
import Sequelize from 'sequelize';
import sequelize from '../config/database.js';
import { User } from '../models/user.js';
import { Post } from '../models/post.js';
import { createRequire } from 'module';

const require = createRequire(import.meta.url);

// Define all associations
User.hasMany(Post, { foreignKey: 'userId', as: 'posts' });
Post.belongsTo(User, { foreignKey: 'userId', as: 'user' });

// Prepare db object
const db = {};

// Register models manually
db.User = User;
db.Post = Post;

// Add sequelize instance
db.sequelize = sequelize;
db.Sequelize = Sequelize;

// ✅ Babel supports both exports styles, but to stay consistent:
export default db;
