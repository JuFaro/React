import {useContext} from 'react';
import {MeuContexto} from './ContextNovo';
import SectionTitle from '../componentes/SectionTitle';


function NaoConsome(){
    const recebe = useContext(MeuContexto);
    console.log(recebe)

    return(
        <>
            <SectionTitle title="Exemplo 02 - NaoConsome dentro do ContextNovo" />
            <div className="center">
                      <h1>{recebe.nome}</h1>
                      <p>RG: {recebe.rg}</p>
                      <p>CPF: {recebe.cpf}</p>
            </div>
        </>
    )
}

export default NaoConsome;