const {User} = require('../DB_connection')

const PostUser = async(req,res) =>{
    const{email,password} = req.body
    try {
        if(!email || !password) res.status(400).json({error:'Faltan Datos'})
        const newUser = await User.findOrCreate({
            where:{email,password}
        })
        res.status(200).json(newUser)
    } catch (error) {
        res.status(500).json({error:error.message})
    }
}

module.exports = PostUser
