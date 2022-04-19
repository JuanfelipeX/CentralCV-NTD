const express =require("express");
const animalSchema = require("../models/animal");

const router = express.Router();

router.post("/user",(req,res)=>{
    const user =userSchema(req.body);
    user
        .save()
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error}));
    });