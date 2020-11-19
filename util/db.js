const mysql = require('mysql2');

const pool = mysql.createPool({
    host: process.env.MYSQL_HOST || 'localhost',
    user: process.env.MYSQL_USER || 'root',
    database: process.env.MYSQL_DATABASE || 'iwi',
    password: process.env.MYSQL_PASSWORD || 'rootpass'
});

module.exports = pool.promise();