//chamando o Sequelize e o arquivo de configuração do database.js
const Sequelize = require('sequelize')
const sequelize = require('../database/database.js');

/* 
    Montando a estrutura da tabela no Sequelize.
    sequelize.define define a estrutura que a tabela  deve possuir, passando o nome e também os campos da tabela
*/

const Clientes = sequelize.define('clientes', {
    id:{
        allowNull: false, /*Permite vazio? No*/
        autoIncrement: true, /*É autoIncrmentável? Si */
        primaryKey: true, /* Define a chave primária */
        type: Sequelize.INTEGER /*Define o tipo de dado, no caso Campo com Valor Inteiro */
    },
    nome:{
        allowNull: false, /*Permite vazio? No*/
        type: Sequelize.STRING(100),
        validate:{
            len: [3,100]
        }
    },
    cpf:{
        allowNull: false, /*Permite vazio? No*/
        type: Sequelize.STRING(14),
        validate:{
            len: [11,14]
        }
    },
    telefone:{
        allowNull: false, /*Permite vazio? No*/
        type: Sequelize.STRING(16),
        validate:{
            len: [10,16]
        }
    }
 
});

module.exports = Clientes;