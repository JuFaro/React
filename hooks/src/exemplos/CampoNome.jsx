import React, {useState, useMemo, memo} from 'react';
function CampoNome({valor, setValor}){

    const [campo, setCampo] = useState({
        nome: '',
    
    });

    const handleInputChange = (event) => {
        setCampo({
           ...campo,
            [event.target.name]: event.target.value
        });
    }

    const mostra = useMemo(
        () => <VerNome nome={campo.nome} />, [campo.nome]
    )

    function VerNome({ nome }) {
        if (nome !== '')
            return 'Nome Foi Alterado';
        else
            return 'Campo Nome Vazio'

    }


 console.log('Nome');
 return(
 <>
 <p>Nome:{valor} </p>
 <input type="text" placeholder="Digite o Nome" name="nome" onBlur={setValor} value={campo.nome} onChange={handleInputChange} ></input>
 <h3>{mostra}</h3>
 
 </>
 );
}
export default memo(CampoNome);