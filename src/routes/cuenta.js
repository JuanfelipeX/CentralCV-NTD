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


//cuenta get
router.get("/cuenta", (req, res) => {
    cuentaSchema
        .find()
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});


//cuenta get por id
router.get("/cuenta/:id", (req, res) => {
    const { id } = req.params;
    cuentaSchema
        .findById(id)
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});

//cuenta actualizar datos por id
router.put("/cuenta/:id", (req, res) => {
    const { id } = req.params;
    const { nombre, apellidos, email, puestoDeTrabajo, departamento } =
    req.body;
    estudioSchema
        .updateOne({ _id: id }, {
            $set: { nombre, apellidos, email, puestoDeTrabajo, departamento }
        })
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});


//cuenta eliminar por id
router.delete("/cuenta/:id", (req, res) => {
    const { id } = req.params;
    estudioSchema
        .remove({ _id: id })
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});