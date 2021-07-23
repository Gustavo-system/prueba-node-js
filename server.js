const express = require('express');
const router = require("./network/routes");
const db = require('./db/db_conect');
const config = require('./config/index');

const app = express();
db(`mongodb+srv://${config.bd_user}:${config.bd_password}@${config.db_host}/${config.db_name}`)

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

try {
  router(app);
  app.listen(config.port, () => {
    console.log(`servidor escuchando en http://localhost:${config.port}`);
  });
} catch (error) {
  console.log(`no se puede inciar el servidor ${error}`);
}

// module.exports = app;
