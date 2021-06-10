import React, { useState, useCallback } from 'react';
import PageTitle from '../componentes/PageTitle';
import SectionTitle from '../componentes/SectionTitle';
import CampoEmail from './CampoEmail';
import CampoNome from './CampoNome';
function PaiCallback() {
    const [count, setCount] = useState(0)
    const [nome, setNome] = useState("O estado foi alterado: ");
    const [email, setEmail] = useState("O estado foi alterado: ");
    const mudaNome = useCallback(
        () => {
            setCount(count+1);
            setNome(nome+count+", ");
        }, [nome,count] 
        );


    const mudaEmail = useCallback(
        () => {
            setCount(count+1);
            setEmail(email+count+", ");
        }, [email, count]
    );

    return (
        <>
            <PageTitle title='UseCallback' subtitle='armazena como referência uma função em cache'/>
            <SectionTitle title='Exemplo 01' />
            <div className='center'>
                <CampoNome valor={nome} setValor={mudaNome} />
                <CampoEmail valor={email} setValor={mudaEmail} />
                
            </div>
        </>
    );
}
export default PaiCallback;