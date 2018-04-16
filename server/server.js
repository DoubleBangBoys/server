const express = require('express');
const app = express(); 

const bodyParser = require('body-parser');
const path = require("path");
const axios = require('axios')

const pgp = require('pg-promise')();
// const db = pgp('postgres://mrmac@localhost:5000/shamazon_main_description')

var config = {
    host: 'localhost',
    user: 'mrmac', // env var: PGUSER
    database: 'shamazon_main_description', // env var: PGDATABASE
    password: null, // env var: PGPASSWORD
    port: 5000, // env var: PGPORT
  }

const db = pgp(config);


//query works!!!
db.query('select * from description_electronicstest31 WHERE "ProductKey" = 55')
  .then(function (data) {
    //   console.log(data, 'test succeesss!!!')
  })
  .catch(function (error) {
    // console.log('ERROR:', error)
  })


  app.get('/products/:productkey', (req, res) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT, POST,DELETE, OPTIONS');
    
      let key = req.params.productkey
      db.any('SELECT * from description_electronicstest31 where "ProductKey" = $1', key).then((result, err) => {
          console.log(result, "test")
          res.json(result)
      }).catch((err) => {
          console.log(err)
      })
  });
  



let CompiledFiles = path.join(__dirname, "..", "public")

app.use(express.static(CompiledFiles));
app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({ extended: true }));



app.get('/', (req, res) => res.send('yo!'))
// app.get('/', (req, res) => res.sendFile('index.html')) 


// app.get('/test/:uid', function testfn(req, res, next) {
//     debug('uid', req.params.uid);  // gives :uid
//     debug('uid', req.query.uid);  // gives undefined      
//   });
  
app.listen(4000, () => console.log('Shamazon Electronic Display Component listening on port 4000!', CompiledFiles))