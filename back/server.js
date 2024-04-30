const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Define o endpoint GET /hello-word
app.get('/hello-word', (req, res) => {
  res.send('Hello, world!');
});

// Inicia o servidor
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});


// inicia o localhost http://localhost:3000/hello-word //