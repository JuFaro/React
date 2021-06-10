import {useState, createContext} from 'react';
import PageTitle from '../componentes/PageTitle';
import SectionTitle from '../componentes/SectionTitle';
import Consome from './Consome'

export const MeuContexto = createContext();

function ContextNovo(){
    const [data, setData]= useState({
        nome: "Nabuco",
        rg: "11.222.333-4",
        cpf: "111.222.333-44"
        
    })

    return(
        <>
            <PageTitle title="ContextNovo" subtitle="Exemplos" />
            <SectionTitle title="Desafio - ContextNovo" />
            <div className="center">
                <MeuContexto.Provider value={data}>
                    <Consome />   
                </MeuContexto.Provider>
            </div>
        </>
    )
}

export default ContextNovo;