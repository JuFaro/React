import React, { memo } from 'react';
function ComCall({ valor, setValor }) {
    console.log('IAiao');

    return (
        <>
            <p>Valor1: {valor}</p>
            <button onClick={setValor}>add 1</button>
        </>
    );
}
export default memo(ComCall);