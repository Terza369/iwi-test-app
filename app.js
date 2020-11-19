const express = require("express");

const app = express();

const userRoutes = require('./routes/user');

app.use(userRoutes);

console.log('App running');

app.listen(process.env.PORT || 3000);