const { Login } = require("../controllers/Login");

const login = require('express').Router()

login.get("/login", Login);

module.exports = login