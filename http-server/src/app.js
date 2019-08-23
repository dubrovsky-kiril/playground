const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes");
const app = express();

mongoose.connect(process.env.NODE_DB_ADDRESS, { useNewUrlParser: true });

app.use(express.json());

routes(app);

app.use((err, req, res, next) => {
  res.status(400).send({ error: err.message });
});

module.exports = app;
