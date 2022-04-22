const mongoose = require("mongoose"); // importando el componente mongoose
const bcrypt = require("bcrypt"); // importando el componente bcrypt
const experienciaSchema = mongoose.Schema({
    cargo: {
        type: String,
        required: true,
    },
    nombreEmpresa: {
        type: String,
        required: true,
    },
    duracion: {
        type: String,
        required: true,
    },
});

module.exports = mongoose.model("experiencia", experienciaSchema);