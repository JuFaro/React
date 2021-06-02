import React from 'react';
class StateEx2 extends React.Component{
    constructor(props){
        super(props);

        this.state={
            id: this.props.id,
            produto: this.props.produto,
            preco: this.props.preco
      
    }
    this.novo = this.novo.bind(this);
    this.desconto = this.desconto.bind(this);
}

novo(){
    this.setState({
        produto: "Caderno"
    })
}
desconto(){
    const d = this.props.preco*0.8
    this.setState({
        preco: d
    })
    
}

    render(){
        return(
            <>
                <h1>Produto com id:{this.state.id}</h1>
                <p>{this.state.produto} custando {this.state.preco}</p>
                <button onClick={this.novo}>Novo Produto</button>
                <button onClick={this.desconto}>Desconto</button>
                
                <hr/>
            </>
        )
    }
}

export default StateEx2;