import axios from 'axios';
import { useState } from 'react';
import {Redirect, Link} from 'react-router-dom';
 
export default function InserirCliente(){
    const[state, setState] = useState({
        cliente: {
            nome:'', 
            cpf:'',
            telefone:''
        }
    });
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
        axios({
            method: 'post',
            url:'http://localhost:3003/os/inserirCliente',
            data: req,
            headers:{"Content-Type": "application/json"}
        }).then(
            data => {
                if(data){
                    alert("Dados inseridos com sucesso");
                    setRedirect(true);
                }
            }
        ).catch(
            () => {console.log("Não foi possível inserir")}
        );
        e.preventDefault();
    }
 
    console.log(state);
    
    if(redirect){
        return <Redirect to='/usuarios' />
    }else{
        return(
            <div className="form">
                <h3>Adicionar Cliente</h3>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label>Nome</label>
                        <input 
                            type='text'
                            name='nome'
                            className='form-control'
                            placeholder="nome"
                            required
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
                            required
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className="form-group">
                        <label>Telefone</label>
                        <input 
                            type='text'
                            name='telefone'
                            className='form-control'
                            placeholder="tel"
                            required
                            onChange={handleInputChange}
                        />
                    </div>
                    <button type='submit' className="w-100 btn btn-lg btn-primary">
                        Adicionar
                    </button>
                </form>
                <p><Link to='/clientes'>Voltar</Link> </p>
            </div>
        )
    }
}
