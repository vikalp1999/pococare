const express = require('express');
const { getProducts, getSingle } = require('../controller/product.controller');
const app = express.Router();
const { authMiddleware } = require('../Middleware/authMiddleware');
app.get('/', authMiddleware, getProducts);
module.exports = app;
