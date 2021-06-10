import React, { useReducer } from 'react';
import PageTitle from '../componentes/PageTitle';
import SectionTitle from '../componentes/SectionTitle';
function UseReducer() {
    //exemplo 01
    const valorInicial = 0;

    function reducer(state, action) {
        switch (action) {
            case 'add': return state + 1;
            case 'dec': return state - 1;
            default: return 0;
        }
    }
    const [state, dispatch] = useReducer(reducer, valorInicial);
    //exemplo 02
    const pessoa = {
        nome: 'Pikachu',
        idade: 19
    };
    function reducer2(state, action) {
        switch (action) {
            case 'muda': return { ...state, nome: 'Charizard' };
            case 'addIdade': return { ...state, idade: state.idade + 1 };
            case 'decIdade': return { ...state, idade: state.idade - 1 };
            default: return { nome: 'Pikachu', idade: 19 };
        }
    }
    const [pstate, pdispatch] = useReducer(reducer2, pessoa);

    return (
        <>
            <PageTitle title='useReducer' subtitle='Outra forma de atualizar como estado'/>
            <SectionTitle title='Exemplo 01 - unico state' />
            <div className='center'>
                <p>{state}</p>
                <button onClick={() => dispatch('add')}>+1</button>
                <button onClick={() => dispatch('dec')}>-1</button>
                <button onClick={() => dispatch('')}>clear</button>
            </div>
            <SectionTitle title='Exemplo 02 - multiplo state' />
            <div className='center'>
                <p>{pstate.nome} - {pstate.idade}</p>
                <button onClick={() => pdispatch('muda')}>Mudando</button>
                <button onClick={() => pdispatch('addIdade')}>add Idade</button>
                <button onClick={() => pdispatch('decIdade')}>dec Idade</button>
                <button onClick={() => pdispatch('')}>clear</button>
            </div>
        </>
    );
}
export default UseReducer;