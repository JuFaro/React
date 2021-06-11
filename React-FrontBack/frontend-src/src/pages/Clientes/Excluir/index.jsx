import { useState, useEffect } from 'react';
import {Redirect, Link} from 'react-router-dom';
import axios from 'axios'

export default function ExcluirCliente(props){
    const[state, setState] = useState({
        cliente: []
    });
 
    const[redirect, setRedirect] = useState(false);
 
    useEffect(
        ()=>{
            const {id} = props.match.params;
            axios.get(`http://localhost:3003/os/clientes/${id}`)
           .then(
               res => {
                   const cliente = res.data;
                   setState({cliente})
               }
           )
        },[props.match.params]
    )
 
    const handleConfirm = () =>{
        const {id} = props.match.params; 
        axios.put(`http://localhost:3003/os/deletarCliente/${id}`)
        .then(
            data => {
                if(data){
                    alert("Dados Excluidos com sucesso");
                    setRedirect(true);
                }
            }
        )
    }
    
    const {cliente} = state;
 
    if(redirect){
        return <Redirect to='/clientes' />
    }else{
        return(
            <>
                <h3>Deseja excluir o usuário {cliente.nome} ?</h3> 
                <button className="w-30 btn btn-lg btn-primary" onClick={handleConfirm}>Sim</button>
                <br></br>
                <br></br>
                <p><Link to={`/detalhesCliente/${cliente.id}`}>Voltar</Link></p>
            </>
        )
    }
}
