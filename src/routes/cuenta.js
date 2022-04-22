const express = require("express");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const router = express.Router(); //manejador de rutas de express
const cuentaSchema = require("../models/cuenta");

//cuenta post
router.post("/cuenta", (req, res) => {
    const cuenta = cuentaSchema(req.body);

    cuenta
        .save()
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});


//studies get
router.get("/cuenta", (req, res) => {
    cuentaSchema
        .find()
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});


//studies get por id
router.get("/cuenta/:id", (req, res) => {
    const { id } = req.params;
    cuentaSchema
        .findById(id)
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});

//studies actualizar datos por id
router.put("/estudio/:id", (req, res) => {
    const { id } = req.params;
    const { nivelEstudios, titulos, descripcion, centrosEducativos, duracion, lugar } =
    req.body;
    estudioSchema
        .updateOne({ _id: id }, {
            $set: { nivelEstudios, titulos, descripcion, centrosEducativos, duracion, lugar }
        })
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});


//studies eliminar por id
router.delete("/estudio/:id", (req, res) => {
    const { id } = req.params;
    estudioSchema
        .remove({ _id: id })
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});