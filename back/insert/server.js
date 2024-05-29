const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 3030;

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