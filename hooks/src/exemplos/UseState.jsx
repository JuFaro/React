import {useState} from 'react';
import PageTitle from '../componentes/PageTitle';
import SectionTitle from '../componentes/SectionTitle';

    function UseState(){
    // montando o estado count
    const [count, setCount] = useState(0);
    const [state, setState] = useState({
        nome: "Nabuco",
        idade: 3,
        cpf:  "111.222.333-44",
    });

    function aumenta(){
        setCount(count+1);
    };

    function mudaCerto(e){
        setState({
            ...state,
            nome:e.target.value
        })
    }

    return(
        <>
        <PageTitle title="UseState" subtitle="Exemplos" />
        <SectionTitle title="Exemplo 01 - Contador" />
        <div className="center">
            <button onClick={aumenta}>+ 1</button>
            <p> <strong>Estou lendo o valor de Count {count}</strong>  </p>
            <button onClick={() => setCount(count-1)}>- 1</button>
        </div>

        <SectionTitle title="Exemplo 02 - onClick" />
        <div className="center">
            <p>Nome: {state.nome}</p>
            <p>Idade: {state.idade} anos</p>
            <p>cpf: {state.cpf}</p>
            <input type="text" value={state.nome} onChange={mudaCerto} />
            <button onClick={()=>setState({
                    ...state,
                    nome:"Macabeu"
                })
            }>Troca Nome:</button>

        </div>
    </>
    )
}

export default UseState;