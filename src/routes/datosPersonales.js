const express = require("express");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const router = express.Router(); //manejador de rutas de express
const datosPersonalesSchema = require("../models/datosPersonales");


//datosPersonales post
router.post("/datosPersonales", (req, res) => {
    const datosPersonales = datosPersonalesSchema(req.body);

    datosPersonales
        .save()
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});


//datosPersonales get
router.get("/datosPersonales", (req, res) => {
    datosPersonalesSchema
        .find()
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});


//datosPersonales get por id
router.get("/datosPersonales/:id", (req, res) => {
    const { id } = req.params;
    datosPersonalesSchema
        .findById(id)
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});

//datosPersonales actualizar datos por id
router.put("/datosPersonales/:id", (req, res) => {
    const { id } = req.params;
    const { fechaNacimiento, identificacion, telefono, pais, departamento, ciudad, genero, perfilProfesional } =
    req.body;
    datosPersonalesSchema
        .updateOne({ _id: id }, {
            $set: { fechaNacimiento, identificacion, telefono, pais, departamento, ciudad, genero, perfilProfesional }
        })
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});


//datosPersonales eliminar por id
router.delete("/datosPersonales/:id", (req, res) => {
    const { id } = req.params;
    datosPersonalesSchema
        .remove({ _id: id })
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});