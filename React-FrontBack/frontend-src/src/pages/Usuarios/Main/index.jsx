import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

export default function MainUsuarios() {
    const [state, setState] = useState({
        usuarios: [{
            email:' ',
            admin:''
        }]
    })

    //Responsavel pela comunicação com o corn(backend) atravez do axios
    //acessa a rota get e trazer os dados pelo then

    useEffect(
        () => {
            axios.get('http://localhost:3003/os/usuarios')
                .then(
                    res => {
                        //nome da constante pode ser qualquer um
                        const usuarios = res.data;
                        setState({ usuarios })
                    }
                )
        }, [] //para de ficar infinito
    )
  
    const {usuarios} = state;
    return (
        <>
            <h3>Usuarios</h3>
            <Link to={'/inserirUsuario'}>Adicionar</Link>

            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>Email</th>
                        <th>Admin</th>
                        <th>Mais Informações</th>
                    </tr>
                </thead>
                <tbody>
                    {
                         usuarios.map(
                       
                            (usuario, key) => 
                             (
                             <tr key={key}>
                                 <td>{usuario.email}</td>
                                 <td>{usuario.admin ? 'sim ':'não'}</td>
                                 <td><Link to={`/detalhesUsuario/${usuario.id}`}>Detalhes</Link></td>
                             </tr>
                            )
                        )
                     }
     
                    <tr>
                        <td>recebe email</td>
                        <td>recebe admin</td>
                        <td><Link to={`/detalhesUsuario/id`}>Detalhes</Link></td>
                    </tr>
                </tbody>
            </table>
            <p><Link to='/'>Voltar</Link></p>
        </>
    )
}
