require("dotenv").config();
const { Sequelize } = require("sequelize");
const dbConfig = require("../config/database");

const Usuario = require("../models/Livro");
const Projeto = require("../models/Editora");
const Endereco = require("../models/Cliente");

const sequelize = new Sequelize(dbConfig);

// Inicializando os models
Livro.init(sequelize);
Editora.init(sequelize);
Cliente.init(sequelize);

// Definindo as associações para os models
Livro.associate(sequelize.models);
Editora.associate(sequelize.models);
Cliente.associate(sequelize.models);

module.exports = sequelize;
// Testando conexão
// (async () => {
// try {
// await sequelize.authenticate();
// console.log('Conexão bem-sucedida!');
// } catch (error) {
// console.error('Conexão falhou!', error);
// } finally {
// sequelize.close();
// }
// })();
