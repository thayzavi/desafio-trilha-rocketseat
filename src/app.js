const express = require('express');
const app = express();
const daitRoutes = require('./routes/daitRoutes');

app.use(express.json());
app.use(daitRoutes);

module.exports = app;