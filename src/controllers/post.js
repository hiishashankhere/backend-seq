import { Post } from '../../models/post.js'
import { User } from '../../models/user.js';
import { createRequire } from 'module';

const require = createRequire(import.meta.url);

export const createPost = async (req, res) => {
    try {
        const { title, content, userId } = req.body;
        const alreadyExists = await Post.findOne({ where: { title } })
        if (alreadyExists) {
            return res.status(400).json({ message: "Post with this title already exists" });
        }
        const post = await Post.create({ title, content, userId });
        res.status(201).json({ message: "Post created successfully", data: post });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal Server Error" });     
    }
}

export const getPosts = async (req, res) => {
    try {
        const { rows, count } = await Post.findAndCountAll({
            include: [{ model: User, as: 'user', attributes: ['id', 'username', 'email'] }]
        })
        return res.status(200).json({ message: 'Post fetched successfully', data: { posts: rows, total: count } })
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal Server Error" });
    }
}