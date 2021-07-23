require('dotenv').config();

const config = {
    port: process.env.PORT || 3000,
    bd_user: process.env.DB_USER,
    bd_password: process.env.DB_PASSWORD,
    db_host: process.env.DB_HOST,
    db_name: process.env.DB_NAME
}

module.exports = config;