const { Usuario } = require("../db/models")
const createError = require("http-errors");
const usuariosServices = require("./usuariosServices");
const { noExtendLeft } = require("sequelize/types/lib/operators");

async function getUsuarios() {
    const usuarios = await Usuario.findAll();

    return usuarios;
};

async function getUsuario(id) {
    const usuario = await Usuario.findOne({
        where: {
            id
        }
    });

    if (!usuario) {
        throw new createError(404, "Usuário não encontrado");
    };

    return usuario;
};

async function createUsuario(novoUsuario) {
    const [usuario, criadoAgora] = await Usuario.findOrCreate({
    where: { email: novoUsuario.email },
    defaults: novoUsuario
    });
    
     if (!criadoAgora) throw new createError(409, "Usuário já está cadastrado!");
    
     return usuario;
    }

// async function removeUsuario(id){

// };

// async function updateUsuario(usuarioAtualizado){

// };

module.exports = {
    getUsuario,
    getUsuarios,
    // createUsuario,
    // removeUsuario,
    // updateUsuario    
}