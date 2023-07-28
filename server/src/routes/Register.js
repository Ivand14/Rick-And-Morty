
const userRegister = require("../controllers/UserRegister");

const Register = require("express").Router();


Register.post("/register", userRegister);


module.exports = Register
