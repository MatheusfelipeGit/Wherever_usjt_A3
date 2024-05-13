const express = require("express");
const mysql = require("mysql");
const app = express();
app.use(express.json());

app.get("/usuarios", (req, res ) => {
    const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'Wherever'
    });

    connection.query('select * from tb_usuarios', (err, results, fields) => {
        console.log(results);
        console.log(fields);
        res.Send('ok');
    })
    
});

const porta = 3000;
app.listen(porta, () => console.log (`Executando na porta ${porta}`));


