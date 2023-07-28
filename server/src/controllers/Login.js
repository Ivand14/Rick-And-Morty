const {User} = require('../DB_connection')


const Login = async(req,res) =>{ 
    const {email,password} = req.query
    try {
        if(!email || !password) return res.status(400).json({error:'Faltan Datos'})
        const findUser = await User.findOne({  where: { email } })
        if(!findUser) return res.status(404).json({error:'Usuario no encontrado'})
        if(findUser.password !== password) return res.status(404).json({error:'Contraseña incorrecta'})
        
        return res.status(200).json({access:true})
    } catch (error) {
        return res.status(500).json({error:error.message})
    }
}

module.exports = {Login}