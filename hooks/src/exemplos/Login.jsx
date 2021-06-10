import {useState} from 'react';
import PageTitle from '../componentes/PageTitle';
import SectionTitle from '../componentes/SectionTitle';

    function UseState(){
    // montando o estado count
    const [state, setState] = useState({
        nome:" ",
        senha:" ",
        senhaConfirma:" "
    });

   const handleInputChange = (event) =>{
       setState({
           ...state,
           [event.target.name]:event.target.value
       })
   };
   console.log(state)
   const resultado = (e) =>{
    const s = state.senha;
    const sc = state.senhaConfirma

    if( s !== sc){
        alert("Senha Diferentes! Tente Novamente")
    } else{
        alert("Senhas Iguais, Prossiga!")
    }
    e.preventDefault();
   };

    return(
        <>
        <PageTitle title="UseState" subtitle="Desafio" />
        <SectionTitle title="Exemplo 01 - Login e Senha" />
        <div className="center">
            <form action="">
                <input type="text" name="nome" placeholder="Nome" onChange={handleInputChange} />
                <input type="text" name="senha" placeholder="Senha" onChange={handleInputChange} />
                <input type="text" name="senhaConfirma" placeholder="Confirma sua senha" onChange={handleInputChange} />
                <hr />
               
                <button onClick={resultado}>Entrar</button>
             
                
            </form>
        </div>

       
    </>
    )
}

export default UseState;