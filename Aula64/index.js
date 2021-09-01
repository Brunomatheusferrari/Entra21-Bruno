const { sequelize, Usuario } = require("./db/models");

(async () => {
    try {
        await sequelize.sync({ force: true });

        await sequelize.authenticate();
        console.log("Conexão bem sucedida!");

        //Inserindo um usuário

       const pedro = await Usuario.create({
           nome: "Pedro",
           email: "pedro@gmail.com",
           senha: "123456"
       });
       
       console.log("Ta feito man!");

       // Inserindo um endereço

       await pedro.createEndereco({
           rua: "Rua 01",
           numero: 123
       });

       console.log("Endereço criado com sucesso!")

       // Inserindo um projeto
        await pedro.createProjeto({
            nome: "Projeto 01",
            quantidadeHoras: 10
       });

       console.log("Projeto inserido com sucesso!")

    } catch (error) {
        console.error("Erro", error);
    } finally {
        sequelize.close()
    }
})()

