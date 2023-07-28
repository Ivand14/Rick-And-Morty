const deleteFav = require("../controllers/DeletedFav");

const DeletedFav = require('express').Router()

DeletedFav.delete("/fav/:id", deleteFav);

module.exports = DeletedFav
