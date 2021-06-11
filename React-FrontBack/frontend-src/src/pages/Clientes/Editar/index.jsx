import axios from 'axios';
import { useState, useEffect} from 'react';
import {Redirect, Link} from 'react-router-dom';
 
export default function EditarCliente(props){
    const[state, setState] = useState({
        cliente: {
            nome:'', 
            cpf:'',
            telefone: ''
        }
    });
 
    //tras os dados através do id
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
 
    const[redirect, setRedirect] = useState(false);
 
    const handleInputChange = (e) => {
        const name = e.target.name;
        const value  = e.target.value;
        setState({
            cliente:{
                ...state.cliente, [name]: value
            }
        })
    }
 
    const handleSubmit = (e) => {
        const req = state.cliente;
        const {id} = state.cliente;
        axios({
            method: 'put',
            url:`http://localhost:3003/os/editarCliente/${id}`,
            data: req,
            headers:{"Content-Type": "application/json"}
        }).then(
            data => {
                if(data){
                    alert("Dados Editados com sucesso");
                    setRedirect(true);
                }
            }
        ).catch(
            () => {console.log("Não foi possivel editar")}
        );
        e.preventDefault();
    }
    const {cliente} = state;
    console.log(state);
    
    if(redirect){
        return <Redirect to='/clientes' />
    }else{
        return(
            <div className="form">
                <h3>Editar Cliente</h3>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label>Nome</label>
                        <input 
                            type='text'
                            name='nome'
                            className='form-control'
                            placeholder="nome"
                            required
                            value={cliente.nome}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className="form-group">
                        <label>CPF</label>
                        <input 
                            type='text'
                            name='cpf'
                            className='form-control'
                            placeholder="cpf"
                            value={cliente.cpf}
                            required
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className="form-group">
                        <label>Telefone</label>
                        <input 
                            type='text'
                            name='tel'
                            className='form-control'
                            placeholder="tel"
                            value={cliente.telefone}
                            required
                            onChange={handleInputChange}
                        />
                    </div>
                   
                    <button type='submit' className="w-100 btn btn-lg btn-primary">
                        Editar
                    </button>
                </form>
                <p><Link to='/clientes'>Voltar</Link> </p>
            </div>
        )
    }  
}
