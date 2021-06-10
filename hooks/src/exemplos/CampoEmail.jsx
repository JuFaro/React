import React, {useState, useMemo, memo} from 'react';
function CampoEmail({valor, setValor}){

    const [campo, setCampo] = useState({
        email: '',
    
    });

    const handleInputChange = (event) => {
        setCampo({
           ...campo,
            [event.target.name]: event.target.value
        });
    }

    const mostra = useMemo(
        () => <VerEmail email={campo.email} />, [campo.email]
    )

    function VerEmail({ email }) {
        if (email !== '')
            return 'Email Foi Alterado';
        else
            return 'Campo Email Vazio'

    }


 console.log('email');
 return(
 <>
 <p>Email: {valor}</p>
 <input type="text" placeholder="Digite o Email" name="email" onBlur={setValor} value={campo.nome} onChange={handleInputChange}></input>
 <h3>{mostra}</h3>
 </>
 );
}
export default memo(CampoEmail);