const express = require("express");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const router2 = express.Router(); //manejador de rutas de express
const estudiosSchema = require("../models/estudios");


/*

poner todos los metodos http de authentication de studies en este archivo /routes/studies, 
pero no deja ya que toca arreglar las routes y app.use del index.js pero a la hora de modificarlo y arreglarlo no deja 
y aparce un error, lo he intentado pero aparece el error app crashed y sale error de throw(new ...) revisarlo y preguntar como arreglarlo

*/

//estudios post
router2.post("/estudio", (req, res) => {
    const estudios = estudiosSchema(req.body);

    estudios
        .save()
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});


//estudios get
router2.get("/estudio", (req, res) => {
    estudiosSchema
        .find()
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});


//estudios get por id
router2.get("/estudio/:id", (req, res) => {
    const { id } = req.params;
    estudiosSchema
        .findById(id)
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});

//estudios actualizar datos por id
router2.put("/estudio/:id", (req, res) => {
    const { id } = req.params;
    const { nivelEstudios, titulos, descripcion, centrosEducativos, duracion, lugar } =
    req.body;
    estudiosSchema
        .updateOne({ _id: id }, {
            $set: {
                nivelEstudios,
                titulos,
                descripcion,
                centrosEducativos,
                duracion,
                lugar,
            },
        })
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});


//estudios eliminar por id
router2.delete("/estudio/:id", (req, res) => {
    const { id } = req.params;
    estudiosSchema
        .remove({ _id: id })
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});


module.exports = router2;