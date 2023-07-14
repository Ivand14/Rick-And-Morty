const users=require('../utils/users')

const Login=(req,res)=>{
    const{email,password}=req.query
    const findUser=users.find(user=>user.email === email && user.password === password)

    if(findUser){
        return res.status(200).json({access:true})
    }else{
        return res.status(200).json({access:false})
    } 
    
    
}

module.exports={
    Login
}

// Deberás obtener los datos email y password que recibes mediante Query. Una vez hecho esto, importa tu arreglo de usuarios y verifica si dentro de ese arreglo hay un usuario que coincida tanto su email y su contraseña con los que recibes por Query.
//En el caso de que haya un usuario que cumpla esa condición, entonces debes devolver una respuesta con status 200, y, en formato JSON, un objeto con una propiedad access: true. Caso contrario devuelve lo mismo pero con la propiedad access: false.