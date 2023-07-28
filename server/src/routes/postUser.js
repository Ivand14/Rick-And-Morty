
const postUser = require("../controllers/PostUser");

const user = require('express').Router()

user.post("/login", postUser);

module.exports =  user


