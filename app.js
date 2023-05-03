const express = require("express");

const mediaRouter = require("./routes/mediaRoutes");

const app = express();

app.use(express.json());

app.use("/team16api/v1/media", mediaRouter);

module.exports = app;
