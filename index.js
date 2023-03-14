//require('.env').config();

const express = require('express');
const userRouter = require('./Routes/userRouter.js')



const app = express();
app.use(express.json());
app.use('/postgres-express', userRouter);

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => console.log('Started with', PORT));