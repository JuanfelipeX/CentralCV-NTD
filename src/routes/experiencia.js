const express = require("express");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const router2 = express.Router(); //manejador de rutas de express
const experienciaSchema = require("../models/experiencia");

//experiencia post
router2.post("/experiencia", (req, res) => {
    const experiencia = experienciaSchema(req.body);

    experiencia
        .save()
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});


//experiencia get
router2.get("/experiencia", (req, res) => {
    experienciaSchema
        .find()
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});


//experiencia get por id
router2.get("/experiencia/:id", (req, res) => {
    const { id } = req.params;
    experienciaSchema
        .findById(id)
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});

//experiencia actualizar datos por id
router2.put("/experiencia/:id", (req, res) => {
    const { id } = req.params;
    const { cargo, nombreEmpresa, duracion } =
    req.body;
    experienciaSchema
        .updateOne({ _id: id }, {
            $set: {  cargo, nombreEmpresa, duracion }
        })
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});


//experiencia eliminar por id
router2.delete("/experiencia/:id", (req, res) => {
    const { id } = req.params;
    experienciaSchema
        .remove({ _id: id })
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});