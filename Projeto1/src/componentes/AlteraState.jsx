import React from 'react';
class AlteraState extends React.Component{
    constructor(props){
        super(props);

        this.state={
            pokemon:"Quem é esse pokemon?"
        }
        this.revelar = this.revelar.bind(this);
    }

    revelar(){
        this.setState({
            pokemon:"Pikachu"
        })
    }

    render(){
        return(
            <>
                <h1>{this.state.pokemon}</h1>
                <button onClick={this.revelar}>Revelar</button>
                <ul>

                    <li>{this.props.idade}</li>
                    <li>{this.props.cpf}</li>
                </ul>
                <hr/>
            </>
        )
    }
}

export default AlteraState;