const {Favorite} = require('../DB_connection')

const deletedFav = async(req,res) =>{
    const {id} = req.params
    try {
        await Favorite.destroy({where:{id}})
        const allFav = await Favorite.findAll()
        res.status(200).json(allFav)
    } catch (error) {
        res.status(500).json({error:error.message})
    }
}

module.exports = deletedFav