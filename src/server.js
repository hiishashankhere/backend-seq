import express from 'express'
import sequelize from '../config/database'
import postRouter from './router/post.js'
import userRouter from './router/user.js'
import { models } from '../models';


const app = express()
app.use(express.json())
app.use('/api/v1/post', postRouter)
app.use('/api/v1/user', userRouter)

app.get('/', (req, res) => {
    res.send('Hello the serve is up and running!!')
})

app.listen(3000, () => {
    sequelize.sync()
    console.log('Server is running on port 3000')
})