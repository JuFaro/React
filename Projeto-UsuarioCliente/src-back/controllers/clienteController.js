const Clientes = require('../models/clientes');
const status = require('http-status');

//comando para realizar inserção dos dados na tabela através de requisição
exports.Insert = (req, res, next) => {
    //criando variáveis de recebimento da requisição
    //lembrando que id é auto incrementável, não precisamos chamá-la
    const nome = req.body.nome;
    const cpf = req.body.cpf;
    const telefone = req.body.telefone;


    //Sequelize irá enviar os dados através do comando create 

    // usuario é apenas o objeto passado na função, pode ter qualquer nome
    Clientes.create({
        nome: nome,
        cpf: cpf,
        telefone: telefone
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
    Clientes.findAll()
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
    Clientes.findByPk(id)
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

    Clientes.findByPk(id)
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
    const nome = req.body.nome;
    const cpf = req.body.cpf;
    const telefone = req.body.telefone;

    Clientes.findByPk(id)
        .then(
            obj => {
                if (obj) {
                    obj.update({
                            nome: nome,
                            cpf: cpf,
                            telefone: telefone
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