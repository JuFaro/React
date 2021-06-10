import {useContext} from 'react';
import {MeuContexto} from './CreateContext';
import SectionTitle from '../componentes/SectionTitle';


function FilhoContext(){
    const recebe = useContext(MeuContexto);
    console.log(recebe)

    return(
        <>
            <SectionTitle title="Exemplo 02 - FilhoContext dentro do UseContext" />
            <div className="center">
                      <h1>{recebe.produto}</h1>
                      <p>id: {recebe.id}</p>
                      <p>Peço: {recebe.preco}</p>
                      <p>Marca: {recebe.marca}</p>
            </div>
        </>
    )
}

export default FilhoContext;