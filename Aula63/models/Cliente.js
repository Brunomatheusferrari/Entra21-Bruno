const { DataTypes, Sequelize, Model } = require("sequelize");
const { hashSync, compareSync } = require("bcrypt");
const Usuario = require("../../aula62/models/Usuario");

class Cliente extends Model {
    static init(sequelize) {
        super.init({
            id: {
                type: DataTypes.UUID,
                primaryKey: true,
                defaultValue: Sequelize.UUIDV4
            },
            nome: {
                type: DataTypes.STRING,
                allowNull: false
            },
            email: {
                type: DataTypes.STRING,
                allowNull: false,
                unique: true,
                validate: {
                    isEmail: {
                        msg: "E-mail inválido!"
                    }
                }
            },
            telefone: {
                type: DataTypes.NUMBER,
                allowNull:true
            },
            senha: {
                type: DataTypes.STRING,
                allowNull: false,
                set(value) {
                    this.setDataValue("senha", hashSync(value, 10));
                }
            }
        }, { sequelize });
    }

    static associate (models) {
        //inserir valor dps
    }


    checarSenha(senha) {
        return compareSync(sennha, this.senha);
    }
}

module.exports = Cliente

