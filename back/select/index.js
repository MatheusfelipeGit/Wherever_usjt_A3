const express = require("express"); //esse require é tipo um import
const mysql = require("mysql2");//esse require é tipo um import
const app = new express();//esse require é tipo um import

app.use(express.json()); 

//esse app é responsável por criar a conexão e retornar o que queremos 
app.get("/usuarios", (req, res ) => {
    const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'Wherever'
    });
    //if caso de erro, para saber onde o erro está
    connection.connect((err) => {
        if (err) {
            
            console.log('Erro ao conectar ao banco de dados:', err);
            res.status(500).send('Erro interno do servidor ao conectar ao banco de dados');
            return;

        }

        //essa query faz a consulta no sql
        connection.query('SELECT * FROM tb_usuarios', (err, results) => {
            connection.end(); // Fecha a conexão com o banco de dados

            //outro if caso tenha erro especifico
            if (err) {
                console.log('Erro ao executar a consulta:', err);
                res.status(500).send('Erro interno do servidor ao executar a consulta');
                return;
            }

            //retorna o result
            console.log('Resultados da consulta:', results);
            res.send(results);
        });
    });

    // connection.query('select * from tb_usuarios', (err, result) => {
    //     res.send(result);  
    // })
    
});

//rodando na porta 3030
const porta = 3030;
app.listen(porta, () => console.log (`Executando na porta ${porta}`));


// inicia o localhost http://localhost:3030/usuarios
