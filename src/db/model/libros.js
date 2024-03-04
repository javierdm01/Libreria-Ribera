const sequelize= require('../db')
const{ Model, DataTypes}= require('sequelize')

class Libros extends Model{}

Libros.init({
    id_lib:{
        type:DataTypes.INTEGER,
        allowNull:false,
        primaryKey:true,
        autoIncrement:true
    },
    nombre_lib:{
        type:DataTypes.STRING,
        allowNull:false,
        unique:{
            args:true,
            msg:"EL campo tiene que ser único"
        },
        validate:{
            len:{
                args:[1,30],
                msg:"La longitud del nombre tiene que ser entre 1 y 30 caracteres"
            }
        }
    },
    unidades_lib:{
        type:DataTypes.INTEGER,
        allowNull:false,
        validate:{
            max:{
                args:[25],
                msg:"Valor Incorrecto. El valor tiene que ser menor a 25"
            },
            min:{
                args:[0],
                msg:"Valor Incorrecto. El valor tiene que ser mayor que 0"
            }
        }
    },
    precio_lib:{
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
},{sequelize,modelName:"Libros", timestamps:false})


module.exports= Libros