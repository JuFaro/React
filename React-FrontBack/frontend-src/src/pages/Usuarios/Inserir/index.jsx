import axios from 'axios';
import { useState } from 'react';
import {Redirect, Link} from 'react-router-dom';
 
export default function InserirUsuario(){
    const[state, setState] = useState({
        usuario: {
            email:'', 
            senha:'',
            admin: 'true'
        }
    });
    const[redirect, setRedirect] = useState(false);
 
    const handleInputChange = (e) => {
        const name = e.target.name;
        const value  = e.target.value;
        setState({
            usuario:{
                ...state.usuario, [name]: value
            }
        })
    }
 
    const handleSubmit = (e) => {
        const req = state.usuario;
        axios({
            method: 'post',
            url:'http://localhost:3003/os/inserirUsuario',
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
                <h3>Adicionar Usuário</h3>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label>Email</label>
                        <input 
                            type='email'
                            name='email'
                            className='form-control'
                            placeholder="email"
                            required
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className="form-group">
                        <label>Senha</label>
                        <input 
                            type='password'
                            name='senha'
                            className='form-control'
                            placeholder="senha"
                            required
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className="col-md-3">
                        <label>Admin</label>
                        <input 
                            type='radio'
                            name='admin'
                            className='col-md-2'
                            required
                            value="true"
                            checked={state.usuario.admin === 'true'} 
                            onChange={handleInputChange}
                        />
                        <label>Colab</label>
                        <input 
                            type='radio'
                            name='admin'
                            className='col-md-2'
                            required
                            value="false"
                            checked={state.usuario.admin === 'false'} 
                            onChange={handleInputChange}
                        />
                    </div>
                    <button type='submit' className="w-100 btn btn-lg btn-primary">
                        Adicionar
                    </button>
                </form>
                <p><Link to='/usuarios'>Voltar</Link> </p>
            </div>
        )
    }
}
