import express from 'express'
import { createPost, getPosts } from '../controllers/post.js'


const router = express.Router()

router.post('/create-post', createPost)
router.get('/get-post', getPosts)


export default router