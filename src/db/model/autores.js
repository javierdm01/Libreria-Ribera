const sequelize= require('../db')
const{ Model, DataTypes}= require('sequelize')

class Autores extends Model{}

Autores.init({
    id_aut:{
        type:DataTypes.INTEGER,
        allowNull:false,
        primaryKey:true,
        autoIncrement:true
    },
    nombre_aut:{
        type:DataTypes.STRING,
        allowNull:false,
        validate:{
            len:{
                args:[1,30],
                msg:"La longitud del nombre tiene que ser entre 1 y 30 caracteres"
            }
        }
    },
    direccion_aut:{
        type:DataTypes.STRING,
        allowNull:false,
        validate:{
            len:{
                args:[1,50],
                msg:"La longitud de la direccion tiene que ser entre 1 y 50 caracteres"
            }
        }
    },
    fechanac_aut:{
        type: DataTypes.DATE,
        allowNull:false,
        validate:{
            isDate:{
                args:true,
                msg: "El valor tiene que ser fecha YYYY-MM-DD"
            },
            isBefore:{
                args: Date(),
                msg:"La fecha tiene que ser anterior a hoy"
            }
        }
    },
    telefono_aut:{
        type: DataTypes.STRING,
        allowNull:false,
        validate:{
            len:{
                args:[1,12],
                msg:"No se puede introducir un telefono con más de 12 caracteres"
            }
        }
    }
},{sequelize,modelName:"Autores", timestamps:false})


module.exports= Autores