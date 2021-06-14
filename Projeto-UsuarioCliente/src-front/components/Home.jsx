import React from 'react';
import logo from '../assets/logo.png';

function Home(){
    return(
        <div className="flex-shrink-0">
            <div className="container">
                <img src={logo} alt="SoulCode" title="SoulCode" />
                <h1>Ordem de Serviços </h1>
                <p>SoulCode Academy - Selecione o CRUD no Menu.</p>
            </div>  
        </div>
    )
}

export default Home;