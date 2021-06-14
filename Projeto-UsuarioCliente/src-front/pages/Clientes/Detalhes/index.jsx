import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';
import axios from 'axios'

export default function DetalhesCliente(props) {
    const [state, setState] = useState({
        cliente: []
    });

    useEffect(
        () => {
            const {id} = props.match.params;
            axios.get(`http://localhost:3003/os/clientes/${id}`)
                .then(
                    res => {
                        //nome da constante pode ser qualquer um
                        const cliente = res.data;
                        setState({ cliente })
                    }
                )
        }, [props.match.params] //para de ficar infinito
    )

    console.log(state)

    const {cliente} = state

    return (
        <>
            <h3>Detalhes Cliente</h3>

            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>Informações</th>
                        <th>Ações</th>

                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            <p>Nome: {cliente.nome}</p>
                            <p>CPF: {cliente.cpf}</p>
                            <p>Tel: {cliente.telefone}</p>
                            <p>Criado em: {moment(cliente.createdAt).format('DD/MM/YYYY')} </p>
                            <p>Editado em: {moment(cliente.updatedAt).format('DD/MM/YYYY')} </p>
                        </td>
                        <td>
                            <p> - </p>
                            <p> - </p>
                            <p><Link to={`/editarCliente/${cliente.id}`}>Editar</Link> </p>
                            <p><Link to={`/excluirCliente/${cliente.id}`}>Excluir</Link> </p>
                        </td>


                    </tr>


                </tbody>
            </table>
            <p><Link to='/clientes'>Voltar</Link></p>
        </>
    )
}