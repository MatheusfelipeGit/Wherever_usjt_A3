// const express = require('express');
// const mysql = require('mysql2');

// //const express = require('express');
// const app = express();
// const PORT = process.env.PORT || 4000;

// // Define o endpoint GET /hello-word
// app.get("/teste", (req, res ) => {
//   const connection = mysql.createConnection({
//   host: 'localhost',
//   user: 'root',
//   password: 'root',
//   database: 'Wherever'
//   });

//   connection.query('select * from tb_usuarios', (err, result) => {
//       res.send(result);
//   })
// });
// // Inicia o servidor
// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`);
// });


// // inicia o localhost http://localhost:4000/hello-word //

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 3000;

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Rota para receber dados do frontend
app.post('/api/data', (req, res) => {
    const data = req.body;
    console.log('Data received:', data);
    res.status(200).json({ message: 'Data received successfully' });
});

app.listen(port, () => {
  console.log(`Server is running on port ${PORT}`);
  });