const mongoose = require("mongoose"); // importando el componente mongoose
const bcrypt = require("bcrypt"); // importando el componente bcrypt
const studiesSchema = mongoose.Schema({
    nombre: {
        type: String,
        required: true,
    },
    apellidos: {
        type: Array,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    puestoDeTrabajo: {
        type: Array,
        required: true,
    },
    departamento: {
        type: String,
        required: true,
    }
});

module.exports = mongoose.model("cuenta", cuentaSchema);