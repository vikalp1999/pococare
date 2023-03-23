require('dotenv').config();
const jwt = require('jsonwebtoken');
async function authMiddleware(req, res, next) {
  const token = req.headers['authorization'];
  if (!token) {
    return res.status(401).send({ error: 'Unauthorized User' });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_TOKEN_KEY);
    console.log(decoded);
    req.user = decoded;
    next();
  } catch (err) {
    return res.status(401).send({ error: 'Unauthorized Error' });
  }
}
async function authRefreshTokenMiddleware(req, res, next) {
  const token = req.headers['authorization'];
  if (!token) {
    return res.status(401).send({ error: 'Unauthorized User' });
  }

  try {
    const decoded = jwt.verify(token, process.env.REFRESH_JWT_TOKEN_KEY);
    console.log(decoded);
    req.user = decoded;
    next();
  } catch (err) {
    return res.status(401).send({ error: 'Unauthorized Error' });
  }
}

module.exports = { authMiddleware, authRefreshTokenMiddleware };
