const Usuarios = require('../models/usuarios');
const status = require('http-status');


//comando para realizar inserção dos dados na tabela através de requisição
exports.Insert = (req, res, next) => {
    //criando variáveis de recebimento da requisição
    //lembrando que id é auto incrementável, não precisamos chamá-la
    const email = req.body.email;
    const senha = req.body.senha;
    const admin = req.body.admin;

    //Sequelize irá enviar os dados através do comando create 

    // usuario é apenas o objeto passado na função, pode ter qualquer nome
    Usuarios.create({
        email: email,
        senha: senha,
        admin: admin
    }).then(
        (obj) => {
            if (obj) {
                res.status(status.OK).send(obj);
            } else {
                res.status(status.NOT_FOUND).send();
            }
        }
    ).catch(
        () => {
            error = next(error)
        }
    )

}

exports.SearchAll = (req, res, next) => {
    Usuarios.findAll()
        .then(
            obj => {
                if (obj) {
                    res.status(status.OK).send(obj);
                } else {
                    res.status(status.NOT_FOUND).send();
                }
            }
        ).catch(
            () => {
                error => next(error)
            }
        )
}

exports.SearchOne = (req, res, next) => {
    const id = req.params.id;
    Usuarios.findByPk(id)
        .then(
            obj => {
                if (obj) {
                    res.status(status.OK).send(obj);
                } else {
                    res.status(status.NOT_FOUND).send();
                }
            }
        ).catch(
            () => {
                error => next(error)
            }
        )
}

exports.Delete = (req, res, next) => {
    const id = req.params.id;

    Usuarios.findByPk(id)
        .then(
            obj => {
                if (obj) {
                    obj.destroy({
                        where: {
                            id: id
                        }
                    }).then(
                        obj => {
                            if (obj) {

                                res.status(status.OK).send();
                            }
                        }
                    ).catch(
                        () => {
                            error => next(error)
                        })
                }
            }
        ).catch(
            () => {
                error => next(error)
            }
        )
}

exports.Update = (req, res, next) => {
    const id = req.params.id;
    const email = req.body.email;
    const senha = req.body.senha;
    const admin = req.body.admin;

    Usuarios.findByPk(id)
        .then(
            obj => {
                if (obj) {
                    obj.update({
                            email: email,
                            senha: senha,
                            admin: admin
                        }, {
                            where: {
                                id: id
                            }
                        })
                        .then(
                            (obj) => {
                                if (obj) {
                                    res.status(status.OK).send(obj);
                                }
                            }).catch(
                            () => {
                                error => next(error)
                            }
                        )
                }
            }
        )
        .catch(
            () => {
                error => next(error)
            }
        )
}