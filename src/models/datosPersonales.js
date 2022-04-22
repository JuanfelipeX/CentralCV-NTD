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
    }
});

module.exports = mongoose.model("datosPersonales", datopsPersonalesSchema);