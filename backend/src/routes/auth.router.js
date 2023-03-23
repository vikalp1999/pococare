const express = require('express');
const app = express.Router();
const { login, signup, refreshToken } = require('../controller/auth.controller');
const { authRefreshTokenMiddleware } = require('../Middleware/authMiddleware');
app.get('/refreshToken', authRefreshTokenMiddleware, refreshToken);
app.post('/login', login);
app.post('/signup', signup);
module.exports = app;
