import {useState} from 'react';
import PageTitle from '../componentes/PageTitle';
import SectionTitle from '../componentes/SectionTitle';

    function UseState(){
    // montando o estado count
    const [state, setState] = useState({
        produto: " ",
        preco: " ",
        parcelas:  " ",
        resultado: " "
    });

   const handleInputChange = (event) =>{
       setState({
           ...state,
           [event.target.name]:event.target.value
       })
   };
   console.log(state)
   const total = (e) =>{
    
        const p = parseFloat(state.preco)
        const v = parseInt(state.parcelas)
        const r = p/v

        setState({
            ...state,
            resultado: r
        })
        e.preventDefault();
   };

    return(
        <>
        <PageTitle title="UseState" subtitle="Desafio" />
        <SectionTitle title="Exemplo 01 - Parcelas" />
        <div className="center">
            <form action="">
                <input type="text" name="produto" placeholder="Produto" onChange={handleInputChange} />
                <input type="number" name="preco" id="" placeholder="Preço" onChange={handleInputChange} /> 
                <select name="parcelas" id="" onChange={handleInputChange} >
                    <option value={1}></option>
                    <option value={6}>6x</option>
                    <option value={8}>8x</option>
                    <option value={10}>10x</option>
                    <option value={12}>12x</option>
                </select> <br />
                <button onClick={total}>Parcelar</button>
                <input type="text" name="resultado" placeholder="Resultado" onChange={handleInputChange}  />
                
            </form>
        </div>

       
    </>
    )
}

export default UseState;