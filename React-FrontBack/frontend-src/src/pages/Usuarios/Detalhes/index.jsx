import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';
import axios from 'axios'

export default function DetalhesUsuario(props) {
    const [state, setState] = useState({
        usuario: []
    });

    useEffect(
        () => {
            const {id} = props.match.params;
            axios.get(`http://localhost:3003/os/usuarios/${id}`)
                .then(
                    res => {
                        //nome da constante pode ser qualquer um
                        const usuario = res.data;
                        setState({ usuario })
                    }
                )
        }, [props.match.params] //para de ficar infinito
    )

    console.log(state)

    const {usuario} = state

    return (
        <>
            <h3>Detalhes Usuarios</h3>

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
                            <p>Email: {usuario.email}</p>
                            <p>Admin: {usuario.admin?'sim':'não'}</p>
                            <p>Criado em: {moment(usuario.createdAt).format('DD/MM/YYYY')} </p>
                            <p>Editado em: {moment(usuario.updatedAt).format('DD/MM/YYYY')} </p>
                        </td>
                        <td>
                            <p> - </p>
                            <p> - </p>
                            <p><Link to={`/editarUsuario/${usuario.id}`}>Editar</Link> </p>
                            <p><Link to={`/excluirUsuario/${usuario.id}`}>Excluir</Link> </p>
                        </td>


                    </tr>


                </tbody>
            </table>
            <p><Link to='/usuarios'>Voltar</Link></p>
        </>
    )
}