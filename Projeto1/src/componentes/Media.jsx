function Media(props){

    const media = (props.n1+props.n2+props.n3)/3

    return(
        <>
            <h1>Nome: {props.nome}</h1>
            <p>Nota 1:{props.n1}</p>
            <p>Nota 2:{props.n2}</p>
            <p>Nota 3:{props.n3}</p>
            <h1>Média: {media} </h1>
        </>
    )
}

export default Media;