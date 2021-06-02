function Imc(props){

    const imc = props.p/(props.h*props.h)
    return(
        <>
            <h1>Nome: {props.nome}</h1>
            <p>Altura:{props.h}</p>
            <p>Peso:{props.p}</p>
            <h1>Imc: {imc.toFixed(2)} </h1>
        </>
    )
}

export default Imc;