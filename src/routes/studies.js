const express = require("express");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const router = express.Router(); //manejador de rutas de express
const studiesSchema = require("../models/studies");

router.post("/peliculas", async(req, res) => {
    const studies = studiesSchema(req.body);

    pelicula
        .save()
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});