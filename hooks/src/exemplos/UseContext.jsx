import {useContext} from 'react';
import {MeuContexto} from './CreateContext';
import SectionTitle from '../componentes/SectionTitle';
import FilhoContext from './FilhoContext'


function UseContext(){
    const recebe = useContext(MeuContexto);
    console.log(recebe)

    return(
        <>
            <SectionTitle title="Exemplo 01 - UseContext dentro do CreatContext" />
            <div className="center">
                      <h1>{recebe.produto}</h1>
                      <p>id: {recebe.id}</p>
                      <p>Peço: {recebe.preco}</p>
                      <p>Marca: {recebe.marca}</p>
                      <br />
                      <FilhoContext/>
            </div>
        </>
    )
}

export default UseContext;