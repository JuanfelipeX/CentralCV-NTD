const mongoose = require("mongoose"); // importando el componente mongoose
const bcrypt = require("bcrypt"); // importando el componente bcrypt
const userSchema = mongoose.Schema({
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
        type: Date,
        required: true,
    },
    lugar: {
        type: String,
        required: true,
    },
});
userSchema.methods.encryptClave = async(clave) => {
    const salt = await bcrypt.genSalt(10);
    return bcrypt.hash(clave, salt);
};
module.exports = mongoose.model("User", userSchema);