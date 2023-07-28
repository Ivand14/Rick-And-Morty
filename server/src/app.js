const express=require('express')
const server=express()
const Register=require('./routes/Register');
const Character=require('./routes/Character')
const Delete = require('./routes/Delete')
const Fav = require('./routes/Fav')
const login = require('./routes/login')
const postUser = require('./routes/postUser')
const morgan = require('morgan');



server.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Credentials', 'true');
    res.header(
        'Access-Control-Allow-Headers',
        'Origin, X-Requested-With, Content-Type, Accept'
    );
    res.header(
        'Access-Control-Allow-Methods',
        'GET, POST, OPTIONS, PUT, DELETE'
        );
        next();
});
    
    server.use(express.json())
    server.use(morgan('dev'))
    server.use('/rickandmorty',Register)
    server.use('/rickandmorty',Character)
    server.use('/rickandmorty',Delete)
    server.use('/rickandmorty',Fav)
    server.use('/rickandmorty',login)
    server.use('/rickandmorty',postUser)

module.exports = server