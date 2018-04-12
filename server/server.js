const express = require('express');
const app = express(); 

const bodyParser = require('body-parser');
const path = require("path");
const axios = require('axios')



let CompiledFiles = path.join(__dirname, "..", "public")

app.use(express.static(CompiledFiles));
app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => res.sendFile('index.html')) 

app.listen(4000, () => console.log('Example app listening on port 4000!', CompiledFiles))