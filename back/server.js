import express from "express";
import mysql from 'mysql2';

const express = require('express');
const app = express();
const PORT = process.env.PORT || 4000;

// Define o endpoint GET /hello-word
app.get("/teste", (req, res ) => {
  const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'Wherever'
  });

  connection.query('select * from tb_usuarios', (err, result) => {
      res.send(result);
  })
});
// Inicia o servidor
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});


// inicia o localhost http://localhost:4000/hello-word //