const express = require('express');

const app = express();

const bodyParser = require('body-parser');
const path = require('path');

const pgp = require('pg-promise')();

const config = {
  host: 'localhost',
  user: 'shamazon', // env var: PGUSER
  database: 'shamazondb', // env var: PGDATABASE
  password: null, // env var: PGPASSWORD
  port: 5432, // env var: PGPORT
};

const db = pgp(config);

app.get('/products/:productkey', (req, res) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,PUT, POST,DELETE, OPTIONS');

  const key = req.params.productkey;
  db.any('SELECT * from description_electronicstest31 where "ProductKey" = $1', key).then((result) => {
    res.json(result);
  }).catch((err) => {
    throw err;
  });
});

const CompiledFiles = path.join(__dirname, '..', 'public');

app.use(express.static(CompiledFiles));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.listen(4000);
