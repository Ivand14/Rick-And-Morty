const {conn} = require('./DB_connection')
const server = require('./app.js')
const PORT = 3001

conn
    .sync({force:true})
    .then(()=>{
        server.listen(PORT,()=>{
            console.log('Server raised in port: ' + PORT)
        })
    })
    .catch((error)=>{
        console.log(error)
    })

