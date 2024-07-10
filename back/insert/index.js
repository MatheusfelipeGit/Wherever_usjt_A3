const express = require("express"); //esse require é tipo um import
const mysql = require("mysql2");//esse require é tipo um import
const app = new express();//esse require é tipo um import
const cors = require("cors");

 app.use(express.json()); 

 app.use(cors());

//esse app é responsável por fazer o put no banco de dados e faz a conexão também 
 app.put("/mensagens", (req, res ) => {

    const {question, answer } = req.body;

    const connection = mysql.createConnection({
    host: 'whereverdb.cz6g6mm86r5c.sa-east-1.rds.amazonaws.com',
    user: 'admin',
    password: '2781046609Ma',
    database: 'WhereverOfc'
    });
    //if caso de erro, para saber onde o erro está
    connection.connect((err) => {
        if (err) {
            
            console.log('Erro ao conectar ao banco de dados:', err);
            res.status(500).send('Erro interno do servidor ao conectar ao banco de dados');
            return;

        }

        //essa query faz o insert no sql
        connection.query('insert into mensagens_chatgpt (mensagens, respostas) values (?, ?); ',[question, answer],
         (err, results) => {
            connection.end(); // Fecha a conexão com o banco de dados

            //outro if caso tenha erro especifico
            if (err) {
                console.log('Erro ao executar o insert:', err);
                res.status(500).send('Erro interno do servidor ao executar a consulta');
                return;
            }

            //retorna o result
            console.log('Resultados do insert:', results);
            res.send(results);
        });
    });

    
});

//rodando na porta 3033
 const porta = 3033;
 app.listen(porta, () => console.log (`Executando na porta ${porta}`));


// inicia o localhost http://localhost:3033/mensagens