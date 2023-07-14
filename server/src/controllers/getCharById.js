const URL="https://rickandmortyapi.com/api/character/"
const axios=require('axios')

const getCharById=(req,res)=>{
    const{id}=req.params
    
    axios(`${URL}${id}`)
    .then(response=>response.data)
    .then(({status, name, species, origin, image, gender})=>{
        if(name){
            const character={
                id,
                status,
                name,
                species,
                origin, 
                image, 
                gender
            }
            return res.status(200).json(character)
        }

        return res.status(400).send('Character not found')
    })
    .catch(error=>{return res.status(500).json({message:error.message})})
    
}

module.exports={
    getCharById
}