//iniciando o Squelize
//importando a dependencia do sequelize
const Sequelize =  require('sequelize');

//usando o modo de desenvolvimento
const environment = process.env.NODE_ENV || 'development';

//passando arquivo com string de conexão
//cria um objeto onde receberá os dados de development
const config = require('../config/config.js')[environment];
/* Chamando os campos da config.js para a database.js
    development:{
        database: {
            host: 'localhost', //poderia ser tbm 127.0.0.1
            port: 3306,
            name: 'servicos',
            dialect: 'mysql',
            user: 'root',
            password: ''
        }
    },
    production:{
        database:{
            host:process.env.DB_HOST,
            host:process.env.DB_PORT
        }
    }
}
*/

//criando um objeto chamado sequelize que faz uso da classe Sequelize
const sequelize = new Sequelize(
    config.database.name,
    config.database.user,
    config.database.password,
    {
        host: config.database.host,
        dialect: config.database.dialect
    }

);

module.exports = sequelize;