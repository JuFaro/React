import {useState} from 'react';
import PageTitle from '../componentes/PageTitle';
import SectionTitle from '../componentes/SectionTitle';

function FormDados(){

    const [state, setState] = useState({
        nome:'',
        email:''
    })

    const handleInputChange=(event)=>{
        console.log(event.target.value);
        console.log(event.target.name);
        setState({
            ...state,
            [event.target.name]:event.target.value
        })

    }

    return(
        <>
        <PageTitle title="UseState" subtitle="Exemplos" />
        <SectionTitle title="Exemplo 01 - Formulário" />
        <div className="center">
            <form action="">
                <div>
                <input type="text" name="nome" placeholder="Nome" onChange={handleInputChange} /> 
                <input type="email" name="email" placeholder="E-mail" onChange={handleInputChange} /> 
                </div>
                <button type="submit">Enviar</button>
            </form>
            
        </div>
         </>
    )
}

export default FormDados;