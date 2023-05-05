const express = require('express');

const mediaRouter = require('./routes/mediaRoutes');
const userRouter = require('./routes/userRoutes');
const reviewRouter = require('./routes/reviewRoutes');

const app = express();

app.use(express.json());

app.use('/media', mediaRouter);
app.use('/users', userRouter);
app.use('/reviews', reviewRouter);

module.exports = app;
