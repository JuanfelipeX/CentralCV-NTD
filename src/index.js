require('dotenv').config();
const userRoutes = require("./routes/authentication");
const estudiosRoutes = require("./routes/estudios");
const datosPersonalesRoutes = require("./routes/datosPersonales");
const experienciaRoutes = require("./routes/experiencia");
const express = require("express");
const cors = require("cors");
const bodyParser = require('body-parser');
const app = express();
const port = 3000
app.use(cors());
const { default: mongoose } = require("mongoose");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use("/api", userRoutes);
app.use("/api", estudiosRoutes);
app.use("/api", datosPersonalesRoutes);
app.use("/api", experienciaRoutes);

app.get('/', function(req, res) {
    respuesta = {
        error: true,
        codigo: 200,
        mensaje: 'Punto de inicio'
    };
    res.send(respuesta);
});

console.log(process.env.MONGODB_URI)
mongoose
    .connect(process.env.MONGODB_URI)
    .then(() => console.log("Connected to mongoDB Atlas"))
    .catch((error) => console.error(error));

let respuesta = {
    error: false,
    codigo: 200,
    mensaje: ''
};


app.listen(3000, () => {
    console.log("El servidor está inicializado en el puerto 3000");
});