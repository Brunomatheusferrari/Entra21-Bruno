require("dotenv").config();
const { Sequelize } = require("sequelize");
const dbConfig = require("../config/database")

const sequelize = new Sequelize(dbConfig);

module.exports = sequelize;

//Testando conexão
// (async () => {                  
//     try {
//         await sequelize.authenticate();
//         console.log('Deu certo. Confia.');
//       } catch (error) {
//         console.error('iiii, Deu ruim meu bom.', error);
//       }finally {
//         sequelize.close();
//       }
// })();











