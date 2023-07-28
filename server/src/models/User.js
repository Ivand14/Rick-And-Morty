
const {DataTypes} = require('sequelize')

module.exports = (sequelize) =>{
    sequelize.define('User',{
        id:{
            type:DataTypes.INTEGER,
            allowNull:true,
            autoIncrement:true,
            primaryKey:true
        },
        email:{
            type:DataTypes.STRING,
            allowNull:false,
            isEmail:true,
            unique:true,
        },
        password:{
            type:DataTypes.STRING,
            allowNull:false
        }
    },{timestamps:false})
}

