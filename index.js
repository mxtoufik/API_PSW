const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mysql = require('mysql2');

const db = mysql.createConnection({
  host: process.env.HOST,
  user: process.env.USER,
  password: process.env.PASSWORD,
  database: process.env.DATABASE_NAME
});

const app = express();
app.use(bodyParser.json());
app.use(cors());

db.connect((err) => {
  if (err) {
    console.error('Error conectándose a la base de datos:', err);
  } else {
    console.log('Conexión a la base de datos exitosa');
  }
});

const port = 3000;
app.listen(port, () => {
  console.log(`Servidor API en ejecución en el puerto ${port}`);
});

app.get('/usuarios', (req, res) => {
  db.all('SELECT * FROM usuarios', (err, rows) => {
    if (err) {
      res.status(500).send({ error: 'Error obteniendo usuarios' });
    } else {
      res.send(rows);
    }
  });
});
