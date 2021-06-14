import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

export default function MainClientes() {
    const [state, setState] = useState({
        clientes: [{
            nome:' ',
            cpf:'',
            telefone:''
        }]
    })

    //Responsavel pela comunicação com o corn(backend) atravez do axios
    //acessa a rota get e trazer os dados pelo then

    useEffect(
        () => {
            axios.get('http://localhost:3003/os/clientes')
                .then(
                    res => {
                        //nome da constante pode ser qualquer um
                        const clientes = res.data;
                        setState({ clientes })
                    }
                )
        }, [] //para de ficar infinito
    )
  
    const {clientes} = state;
    return (
        <>
            <h3>Clientes</h3>
            <Link to={'/inserirCliente'}>Adicionar</Link>

            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>Nome</th>
                        <th>CPF</th>
                        <th>Telefone</th>
                        <th>Mais Informações</th>
                    </tr>
                </thead>
                <tbody>
                    {
                         clientes.map(
                       
                            (cliente, key) => 
                             (
                             <tr key={key}>
                                 <td>{cliente.nome}</td>
                                 <td>{cliente.cpf}</td>
                                 <td>{cliente.telefone}</td>
                                 <td><Link to={`/detalhesCliente/${cliente.id}`}>Detalhes</Link></td>
                             </tr>
                            )
                        )
                     }
     
                    <tr>
                        <td>recebe nome</td>
                        <td>recebe cpf</td>
                        <td>recebe telefone</td>
                        <td><Link to={`/detalhesCliente/id`}>Detalhes</Link></td>
                    </tr>
                </tbody>
            </table>
            <p><Link to='/'>Voltar</Link></p>
        </>
    )
}
