const mongoose = require("mongoose"); // importando el componente mongoose
const bcrypt = require("bcrypt"); // importando el componente bcrypt
const datosPersonalesSchema = mongoose.Schema({
    fechaNacimiento: {
        type: Date,
        required: true,
    },
    identificacion: {
        type: String,
        required: true,
    },
    telefono: {
        type: String,
        required: true,
    },
    pais: {
        type: Array,
        required: true,
    },
    departamento: {
        type: String,
        required: true,
    },
    ciudad: {
        type: String,
        required: true,
    },
    genero: {
        type: String,
        required: true,
    },
    perfilProfesional: {
        type: String,
        required: true,
    },
    nivelEstudios: {
        type: String,
        required: true,
    },
    titulos: {
        type: Array,
        required: true,
    },
    descripcion: {
        type: String,
        required: true,
    },
    centrosEducativos: {
        type: Array,
        required: true,
    },
    duracion: {
        type: String,
        required: true,
    },
    lugar: {
        type: String,
        required: true,
    },
    cargo: {
        type: String,
        required: true,
    },
    nombreEmpresa: {
        type: String,
        required: true,
    },
    duracion2: {
        type: String,
        required: true,
    }
});

module.exports = mongoose.model("datosPersonales", datosPersonalesSchema);