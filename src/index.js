const express = require("express");
const bodyParser = require('body-parser');
const app = express();
const port = 3000
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', function(req, res) {
    respuesta = {
     error: true,
     codigo: 200,
     mensaje: 'Punto de inicio'
    };
    res.send(respuesta);
})
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


