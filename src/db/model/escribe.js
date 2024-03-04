const sequelize= require('../db')
const{ Model, DataTypes}= require('sequelize')

class Escribe extends Model{}

//Init Model Escribe
Escribe.init({
    cuantia:{
        type: DataTypes.FLOAT,
        allowNull:false,
        validate:{
            isFloat:{
                msg:"El valor tiene que ser Real"
            },
            min:{
                args:[0],
                msg:"No se puede introducir un precio menor que 0"
            }
        }
    }
},{sequelize,modelName:"Escribe", timestamps:false,freezeTableName:true})


module.exports= Escribe