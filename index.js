//require('.env').config();

const express = require('express');
const userRouter = require('./Routes/userRouter.js')
const postRouter = require('./Routes/postRouter')



const app = express();
app.use(express.json());
app.use('/express-postgres', userRouter);
app.use('/express-postgres', postRouter);

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => console.log('Started with', PORT));