const express = require("express");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const router = express.Router(); //manejador de rutas de express
const datosPersonalesSchema = require("../models/datosPersonales");


/*

poner todos los metodos http de authentication de studies en este archivo /routes/studies, 
pero no deja ya que toca arreglar las routes y app.use del index.js pero a la hora de modificarlo y arreglarlo no deja 
y aparce un error, lo he intentado pero aparece el error app crashed y sale error de throw(new ...) revisarlo y preguntar como arreglarlo

*/

router.post("/datosPersonales", async(req, res) => {
    const { fechaNacimiento, identificacion, telefono, pais, departamento, ciudad, genero, perfilProfesional} =
    req.body;

    const studies = new datosPersonalesSchema({
        fechaNacimiento: fechaNacimiento,
        identificacion: identificacion,
        telefono: telefono,
        pais: pais,
        departamento: departamento,
        ciudad: ciudad,
        genero: genero,
        perfilProfesional: perfilProfesional
    });

    await datosPersonales.save();
});