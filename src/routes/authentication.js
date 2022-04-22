const express = require("express");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const router = express.Router(); //manejador de rutas de express
const userSchema = require("../models/user");
const studiesSchema = require("../models/studies"); //studies


//user registrarse 
router.post('/signup', async(req, res) => {
    const { usuario, correo, clave } = req.body;

    user2 = await userSchema.findOne({ correo: req.body.correo });
    if (user2) return res.status(400).json({ error: 'usuario ya existente' });

    const user = new userSchema({
        usuario: usuario,
        correo: correo,
        clave: clave

    });


    user.clave = await user.encryptClave(user.clave);
    await user.save(); //save es un método de mongoose para guardar datos en MongoDB 
    //primer parámetro: payload - un dato que se agrega para generar el token
    //segundo parámetro: un texto que hace que el código generado sea único
    //tercer parámetro: tiempo de expiración (en segundos, 24 horas en segundos)
    const token = jwt.sign({ id: user._id },
        process.env.SECRET, {
            expiresIn: 60 // * 60 * 24 //un día en segundos 
        }
    );
    res.json({
        auth: true,
        token
    });

});

//user inicio de sesión 
router.post('/login', async(req, res) => {
    // validaciones
    const { error } = userSchema.validate(req.body.correo, req.body.clave);
    if (error) return res.status(400).json({ error: error.details[0].message })

    const user = await userSchema.findOne({ correo: req.body.correo });
    if (!user) return res.status(400).json({ error: 'Usuario no encontrado' });

    const validPassword = await bcrypt.compare(req.body.clave, user.clave);
    if (!validPassword) return res.status(400).json({ error: 'contraseña no válida' })

    res.json({
        error: null,
        data: 'exito bienvenido'
    })
})

module.exports = router;