import React, {memo} from 'react';
function SemCall({valor, setValor}){

 console.log('Nunca nem Vi');
 return(
 <>
 <p>Valor2: {valor}</p>
 <button onClick={setValor}>add 2</button>
 </>
 );
}
export default memo(SemCall);