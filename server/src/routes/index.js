
const {getCharById}=require('../controllers/getCharById')
const {Login}=require('../controllers/Login')
const {postFav,deleteFav}=require('../controllers/handleFavorites')


const router=require('express').Router()


router.get( "/character/:id",(req,res)=>{
    getCharById(req,res)
})
router.get("/login",(req,res)=>{
    Login(req,res)
})
router.post("/fav",(req,res)=>{
    postFav(req,res)
})
router.delete("/fav/:id",(req,res)=>{
    deleteFav(req,res)
})

module.exports={
    router
}