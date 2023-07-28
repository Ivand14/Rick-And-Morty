const {User} = require("../DB_connection");

const userRegister = async (req, res) => {
    const {email,password} = req.body
    try {
        if(!email || !password) return res.status(404).json({error:'Faltan Datos'})
        const userExist = await User.findOne({where:{email}})
        if (userExist) return res.status(404).json({error:'Este usuario ya existe'})
        const newUser = await User.create({email,password})
        return res.status(200).json(newUser)
    } catch (error) {
        return res.status(500).json({error:'Error al registrar el usuario'})
    }
};

module.exports = userRegister;
