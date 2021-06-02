import React from 'react';
class Carro extends React.Component{

    render(){
        return(
            <>
                <h1>Olá! Tudo bem?</h1>
                <ul>
                    <li>{this.props.marca}</li>
                    <li>{this.props.modelo}</li>
                    <li>{this.props.ano}</li>
                </ul>
                <hr/>
            </>
        )
    }
}

export default Carro;