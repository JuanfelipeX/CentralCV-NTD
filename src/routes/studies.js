const express = require("express");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const router = express.Router(); //manejador de rutas de express
const studiesSchema = require("../models/studies");

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