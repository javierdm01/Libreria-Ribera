const sequelize= require('../db')
const{ Model, DataTypes}= require('sequelize')

class Editoriales extends Model{}

Editoriales.init({
    id_edi:{
        type:DataTypes.INTEGER,
        allowNull:false,
        primaryKey:true,
        autoIncrement:true
    },
    nombre_edi:{
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
    direccion_edi:{
        type:DataTypes.STRING,
        allowNull:false,
        validate:{
            len:{
                args:[1,50],
                msg:"La longitud de la direccion tiene que ser entre 1 y 50 caracteres"
            }
        }
    },
    telefono_edi:{
        type: DataTypes.STRING,
        allowNull:false,
        validate:{
            len:{
                args:[1,12],
                msg:"No se puede introducir un telefono con más de 12 caracteres"
            }
        }
    }
},{sequelize,modelName:"Editoriales", timestamps:false})


module.exports= Editoriales