const express = require("express");
const bodyParser = require('body-parser');
const app = express();
const port = 3000
const { default: mongoose } = require("mongoose");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
require('dotenv').config();
app.get('/', function(req, res) {
    respuesta = {
     error: true,
     codigo: 200,
     mensaje: 'Punto de inicio'
    };
    res.send(respuesta);
})
console.log(process.env.MONGODB_URI)
mongoose.connect(process.env.MONGODB_URI).then(()=> console.log("login")).catch((error)=> console.error(error))

let respuesta = {
    error: false,
    codigo: 200,
    mensaje: ''
   };


'use srict';
const http=require('http');

const server=http.createServer(function(req, res){
    res.writeHead(200, {'content-type': 'text/plain' });
    res.end('hola mundo');
})
server.listen(3000);


