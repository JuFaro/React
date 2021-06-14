//chamando o Sequelize e o arquivo de configuração do database.js
const Sequelize = require('sequelize')
const sequelize = require('../database/database.js');

/* 
    Montando a estrutura da tabela no Sequelize.
    sequelize.define define a estrutura que a tabela  deve possuir, passando o nome e também os campos da tabela
*/

const Usuarios = sequelize.define('usuarios', {
    id:{
        allowNull: false, /*Permite vazio? No*/
        autoIncrement: true, /*É autoIncrmentável? Si */
        primaryKey: true, /* Define a chave primária */
        type: Sequelize.INTEGER /*Define o tipo de dado, no caso Campo com Valor Inteiro */
    },
    email:{
        allowNull: false, /*Permite vazio? No*/
        type: Sequelize.STRING(60),
        validate:{
            len: [6,60]
        } 
    },
    senha:{
        allowNull: false, /*Permite vazio? No*/
        type: Sequelize.STRING(20),
        validate:{
            len: [6,20]
        },
    },
    admin:{
        allowNull: false, /*Permite vazio? No*/
        type: Sequelize.BOOLEAN,
        defaultValue: true
    }   
})

module.exports = Usuarios;