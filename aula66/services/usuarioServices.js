const { Usuario } = require("../db/models")

async function getUsuarios(id) {
    const usuario = await Usuario.findOne({
        where: {
            id: req.params.id
        }
    });

    if (!usuario) {
        return res.status(404).json({ message: "Usuário não foi encontrado!" });
    }

    res.json(usuario);
};

async function getUsuario(id){

}

async function createUsuario(usuario){

}

async function updateUsuario(usuarioAtualizado){

}

async function removerUsuario(id){

}

module.exports = {
    getUsuarios,
    getUsuario,
    createUsuario,
    updateUsuario,
    removerUsuario
}