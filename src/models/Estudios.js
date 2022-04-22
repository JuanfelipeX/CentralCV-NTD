const mongoose = require("mongoose"); // importando el componente mongoose
const bcrypt = require("bcrypt"); // importando el componente bcrypt
const studiesSchema = mongoose.Schema({
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
    }
});

module.exports = mongoose.model("studies", studiesSchema);