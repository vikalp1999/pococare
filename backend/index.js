require('dotenv').config();
const express = require('express');
const app = express();
const cors = require('cors');
const connect = require('./src/config/db.config');
const authRouter = require('./src/routes/auth.router');
const product = require("./src/routes/product.route")

const PORT = process.env.PORT || 8080;
app.use(cors());
app.use(express.json());
app.use('/auth', authRouter);
app.use("/product",product)

app.get('/', (req, res) => {
  res.status(200).send('welcome');
});

app.listen(PORT, async () => {
  try {
    await connect();
    console.log(`listening http://localhost:${PORT}`);
  } catch (er) {
    console.log(er.message, 'connection');
  }
});
