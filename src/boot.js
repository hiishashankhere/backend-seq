import sequelize from '../config/database.js';
import { User } from '../models/user.js';
import { Post } from '../models/posts.js';

const seedDatabase = async () => {
    try {
        console.log('🔄 Syncing database...');
        await sequelize.sync({ force: true }); // Drops and recreates all tables

        console.log('🌱 Seeding users...');
        const users = await User.bulkCreate([
            { username: 'Shashank Singh', email: 'shashank@example.com', password: 'shashank123' },
            { username: 'Aarav Patel', email: 'aarav@example.com', password: 'aarav123' },
            { username: 'Rahul Sharma', email: 'rahul@example.com', password: 'rahul123' },
            { username: 'Priya Sharma', email: 'priya@example.com', password: 'priya123' },
            { username: 'Rohan Mehta', email: 'rohan@example.com', password: 'rohan123' },
        ]);

        console.log('🌱 Seeding posts...');
        const posts = await Post.bulkCreate([
            { title: 'Learning Sequelize ORM', content: 'Sequelize makes SQL fun again.', userId: users[0].id },
            { title: 'Intro to Neon PostgreSQL', content: 'Neon is cloud-native and blazing fast.', userId: users[1].id },
            { title: 'Building APIs with Express', content: 'Express is the simplest backend framework.', userId: users[2].id },
            { title: 'Async/Await Deep Dive', content: 'Understanding promises and async flows in JS.', userId: users[0].id },
            { title: 'Database Relations Explained', content: 'A guide to one-to-many and many-to-many relations.', userId: users[3].id },
        ]);

        console.log(`✅ Seed completed: ${users.length} users, ${posts.length} posts.`);
        process.exit(0);
    } catch (err) {
        console.error('❌ Error seeding database:', err);
        process.exit(1);
    }
};

seedDatabase();
