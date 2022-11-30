const mysql = require('mysql')

const connection = mysql.createConnection({
    host: 'localhost',
    database: 'cursos',
    user: 'root'
});

module.exports = connection;