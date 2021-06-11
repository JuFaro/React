module.exports = {
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