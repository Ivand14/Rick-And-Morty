const getCharById = require("../controllers/getCharById");

const Character = require('express').Router()

Character.get("/character/:id", getCharById);

module.exports = Character