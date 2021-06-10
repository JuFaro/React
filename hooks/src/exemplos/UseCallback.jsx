import React, { useState, useCallback } from 'react';
import PageTitle from '../componentes/PageTitle';
import SectionTitle from '../componentes/SectionTitle';
import ComCall from './ComCall';
import SemCall from './SemCall';
function ComponentePapito() {
    const [valor1, setValor1] = useState(0);
    const [valor2, setValor2] = useState(0);
    const mudaValor1 = useCallback(
        () => {
            setValor1(valor1 + 1);
        }, [valor1]);

    const mudaValor2 = useCallback(
        () => {
            setValor2(valor2 + 2);
        }, [valor2]
    );

    return (
        <>
            <PageTitle title='UseCallback' subtitle='armazena como referência uma função em cache'/>
            <SectionTitle title='Exemplo 01' />
            <div className='center'>
                <ComCall valor={valor1} setValor={mudaValor1} />
                <SemCall valor={valor2} setValor={mudaValor2} />
            </div>
        </>
    );
}
export default ComponentePapito;