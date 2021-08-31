const sequelize = require("./database");
const { Usuario, Projeto } = sequelize.models;

(async () => {
    try {
        await sequelize.sync({ force: true });
        console.log("Tabelas foram criadas.");

        //         // Criando a tabela Usuarios
        // await Usuario.sync({ force: true });
        //         console.log("Tabela criada com sucesso!");

        // Inserindo um usuário
        const pedro = await Usuario.create({
            nome: "Pedro",
            email: "pedro@email.com",
            senha: "123456"
        });

        console.log(pedro.checarSenha("1234"));

        //Criando Projeto 

        const projeto = await Projeto.create({
            nome: "Projeto Verão 2021",
            quantidadeHoras: 60
        });

        await projeto.addUsuario(pedro);

        // await projeto.removeUsuarios();

        //         console.log("Usuário criado com sucesso");
        //         console.log(pedro.toJSON)

        //Criando um endereço
        //   await Endereco.create ({
        //     rua: "Rua 01",
        //     numero: 123,
        //     idUsuario: pedro.id
        // });

        // console.log("Endereço criado com sucesso.");

        // await pedro.createEndereco({
        //     rua: "Rua 01",
        //     numero: 123
        // });

        // console.log("Endereço criado com sucesso.");

        //         //Modificar o registro
        //         pedro.email = "pedrão@email.com"
        //         await pedro.save()
        //         console.log("Email atualizado com sucesso!")

        //         //Remover registros 
        //         await pedro.destroy();
        //         console.log("O maluco sumiu")

        //         //Inserindo multiplos registros



        //         const usuarios = await Usuario.bulkCreate([
        //             {
        //                 nome: "Pedro",
        //                 email: "pedro@email.com",
        //                 senha: "123456"
        //             },
        //             {
        //                 nome: "Paulo",
        //                 email: "paulo@email.com",
        //                 senha: "123456"
        //             },
        //             {
        //                 nome: "José",
        //                 email: "josé@email.com",
        //                 senha: "123456"
        //             }
        //         ])
        //         console.log("Usuário inseridos com sucesso")
        //         usuarios.forEach((usuario) => {
        //             console.log(usuario.toJSON())
        //         })

        //         //Comparando senha

        //         console.log(compareSync("12346", usuarios[0].toJSON().senha))

        //         // Selecionando registros

        //         const todosUsuarios = await Usuario.findAll({
        //             where: {
        //                 nome: {
        //                     [Op.iLike]: "p%"
        //                 }
        //             }
        //         });

        //         for (let usuario of todosUsuarios) {
        //             console.log(usuario.toJSON());
        //         }

        //         //Selecionando apenas um registro

        //         const paulo = await Usuario.findOne({
        //             where: {
        //                 nome: "Paulo"
        //             }
        //         });

        //         console.log(paulo.toJSON());

        // const jose= await Usuario.findByPk("7c0b1193-e4fb-4b1d-9f04-dfed3c4a6c39");

        // console.log(jose.toJSON());

    } catch (err) {
        console.error("Ocorreu algum erro ao criar a tabela", err.message);
    } finally {
        sequelize.close();
    }
})();