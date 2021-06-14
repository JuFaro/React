import React from 'react';
import {Switch, Route} from 'react-router-dom';
import UsuariosRoutes from '../routes/UsuariosRoutes';
import ClientesRoutes from '../routes/ClientesRoutes';
import Home from './Home';

function Content(){
    return(
        <div className="flex-shrink-0">
            <div className="container">
                <Switch>
                    <Route exact path='/' component={Home} />
                </Switch>     
            </div>  
            <UsuariosRoutes/>;
            <ClientesRoutes/>
        </div>
    )
}

export default Content;