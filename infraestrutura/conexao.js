const mysql = require('mysql2');

const conexao = mysql.createConnection({
    host: 'containers-us-west-160.railway.app',
    port: 6145,
    user: 'root',
    password: 'EgXogcJ81dTr8MsUxtyf',
    database: 'railway'
});

module.exports = conexao;