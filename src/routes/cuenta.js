const express = require("express");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const router = express.Router(); //manejador de rutas de express
const cuentaSchema = require("../models/cuenta");


/*

poner todos los metodos http de authentication de studies en este archivo /routes/studies, 
pero no deja ya que toca arreglar las routes y app.use del index.js pero a la hora de modificarlo y arreglarlo no deja 
y aparce un error, lo he intentado pero aparece el error app crashed y sale error de throw(new ...) revisarlo y preguntar como arreglarlo

*/

router.post("/cuenta", async(req, res) => {
    const { nombre, apellidos, email, puestoDeTrabajo, departamento} =
    req.body;

    const studies = new cuentaSchema({
        nombre: nombre,
        apellidos: apellidos,
        email: email,
        puestoDeTrabajo: puestoDeTrabajo,
        departamento: departamento
    });

    await cuenta.save();
});