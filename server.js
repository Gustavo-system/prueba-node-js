const express = require('express');
const router = require("./network/routes");
const db = require('./db/db_conect');
require('dotenv').config();

const app = express();
db(`mongodb+srv://db_gus_user:1234567890@cluster0.cr7zd.mongodb.net/db_prueba`)

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

try {
  router(app);
  app.listen(process.env.PORT, () => {
    console.log(`servidor escuchando en http://localhost:${process.env.PORT}`);
  });
} catch (error) {
  console.log(`no se puede inciar el servidor ${error}`);
}
