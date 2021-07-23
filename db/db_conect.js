const db_mongo = require('mongoose');

// const uri = "mongodb+srv://db_gus_user:1234567890@cluster0.cr7zd.mongodb.net/db_prueba";

db_mongo.Promise = global.Promise;

const connect = async (uri) =>{
    await db_mongo
        .connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
        .then(() => console.log("[db] Conectada con éxito"))
        .catch((err) => console.error("eroor en la conexion [db]", err));
}

module.exports = connect
