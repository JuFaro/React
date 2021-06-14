import { useState, useEffect } from 'react';
import {Redirect, Link} from 'react-router-dom';
import axios from 'axios'

export default function ExcluirUsuario(props){
    const[state, setState] = useState({
        usuario: []
    });
 
    const[redirect, setRedirect] = useState(false);
 
    useEffect(
        ()=>{
            const {id} = props.match.params;
            axios.get(`http://localhost:3003/os/usuarios/${id}`)
           .then(
               res => {
                   const usuario = res.data;
                   setState({usuario})
               }
           )
        },[props.match.params]
    )
 
    const handleConfirm = () =>{
        const {id} = props.match.params; 
        axios.put(`http://localhost:3003/os/deletarUsuario/${id}`)
        .then(
            data => {
                if(data){
                    alert("Dados Excluidos com sucesso");
                    setRedirect(true);
                }
            }
        )
    }
    
    const {usuario} = state;
 
    if(redirect){
        return <Redirect to='/usuarios' />
    }else{
        return(
            <>
                <h3>Deseja excluir o usuário {usuario.email} ?</h3> 
                <button className="w-30 btn btn-lg btn-primary" onClick={handleConfirm}>Sim</button>
                <br></br>
                <br></br>
                <p><Link to={`/detalhesUsuario/${usuario.id}`}>Voltar</Link></p>
            </>
        )
    }
}
