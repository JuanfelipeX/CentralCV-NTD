const express = require("express");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const router = express.Router(); //manejador de rutas de express
const studiesSchema = require("../models/estudios");


/*

poner todos los metodos http de authentication de studies en este archivo /routes/studies, 
pero no deja ya que toca arreglar las routes y app.use del index.js pero a la hora de modificarlo y arreglarlo no deja 
y aparce un error, lo he intentado pero aparece el error app crashed y sale error de throw(new ...) revisarlo y preguntar como arreglarlo

*/

router.post("/studies", async(req, res) => {
    const { nivelEstudios, titulos, descripcion, centrosEducativos, duracion, lugar } =
    req.body;

    const studies = new studiesSchema({
        nivelEstudios: nivelEstudios,
        titulos: titulos,
        descripcion: descripcion,
        centrosEducativos: centrosEducativos,
        duracion: duracion,
        lugar: lugar,
    });

    await studies.save();
});