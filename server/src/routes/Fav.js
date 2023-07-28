
const postFav = require("../controllers/PostFav");

const Fav = require('express').Router()

Fav.post("/fav", postFav);

module.exports = Fav
