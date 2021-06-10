import {useState, createContext} from 'react';
import PageTitle from '../componentes/PageTitle';
import SectionTitle from '../componentes/SectionTitle';
import UseContext from './UseContext'

export const MeuContexto = createContext();

function CreateContext(){
    const [data, setData]= useState({
        id: 1,
        produto: "sombra",
        preco: 70.00,
        marca: "Avon"
    })

    return(
        <>
            <PageTitle title="CreateContext" subtitle="Exemplos" />
            <SectionTitle title="Exemplo 01 - CreateContext" />
            <div className="center">
                <MeuContexto.Provider value={data}>
                    <UseContext />   
                </MeuContexto.Provider>
            </div>
        </>
    )
}

export default CreateContext;