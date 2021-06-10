import {useState, useEffect} from 'react';
import PageTitle from '../componentes/PageTitle';
import SectionTitle from '../componentes/SectionTitle';


function UseEffect(){
    const [state, setState] = useState(' ');
    const [count, setCount] = useState(0);

    useEffect( ()=>{
        console.log("Count tem valor: "+count)
        
    });
    useEffect( ()=>{
        setState(count%2 === 0 ? "Par":"Impar")
    },[count]
    );

    return(
        <>
            <PageTitle title="UseEffect" subtitle="Exemplos" />
            <SectionTitle title="Exemplo 01 - UseEffect" />
            <div className="center">
                <p>{state} </p>
                <p onClick={() => setCount(count+1)}>{count}</p>
              
           
            </div>
        </>
    )
}

export default UseEffect;