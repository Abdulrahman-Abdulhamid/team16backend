const express = require('express');

const mediaRouter = require('./routes/mediaRoutes');
const userRouter = require('./routes/userRoutes');

const app = express();

app.use(express.json());

app.use('/team16api/v1/media', mediaRouter);
app.use('/team16api/v1/users', userRouter);

module.exports = app;
