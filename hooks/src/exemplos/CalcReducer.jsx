import React, { useReducer, useState } from 'react';
import PageTitle from '../componentes/PageTitle';
import SectionTitle from '../componentes/SectionTitle';

function CalcReducer() {

    const [valor, setValor] = useState({
        a: 0,
        b: 0,

    });

    const handleInputChange = (event) => {
        const v = parseFloat(event.target.value)
        setValor({
            ...valor,
            [event.target.name]: v
        })

    }

    console.log(valor)

    function reducer(state, action) {
        switch (action) {
            case 'add': return valor.a + valor.b 
            case 'dec': return valor.a - valor.b 
            case 'div': return valor.a / valor.b 
            case 'mult': return valor.a * valor.b 
            case 'mod': return valor.a % valor.b 
            case 'elv': return Math.pow(valor.a,valor.b ) 

            default: return 0;
        }
    }

    const [resultado, dispatch] = useReducer(reducer, 0)
    return (
        <>
            <PageTitle title="calcReducer" subtitle="Exemplos" />
            <SectionTitle title="Desafio 01 - Calculadora Simples" />
            <div className="center">
                <form action="">
                    <input type="number" name="a" id="" onChange={handleInputChange} />
                    <input type="number" name="b" id="" onChange={handleInputChange} />
                  
                    

                </form>
                <p>{resultado}</p>
                <hr />
                <button onClick={() => dispatch('add')}>Soma</button>
                <button onClick={() => dispatch('dec')}>Subtração</button>
                <button onClick={() => dispatch('div')}>Divisão</button>
                <button onClick={() => dispatch('mult')}>Multiplicação</button>
                <button onClick={() => dispatch('mod')}>Módulo</button>
                <button onClick={() => dispatch('elv')}>a^b</button>


            </div>

        </>
    )
}

export default CalcReducer;