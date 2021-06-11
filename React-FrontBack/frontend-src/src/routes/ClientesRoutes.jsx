import {Switch, Route} from 'react-router-dom';
import MainClientes from '../pages/Clientes/Main';
import InserirClientes from '../pages/Clientes/Inserir'
import DetalhesClientes from '../pages/Clientes/Detalhes';
import ExcluirClientes from '../pages/Clientes/Excluir';
import EditarClientes from '../pages/Clientes/Editar';

export default function ClientesRoutes(){
    return(
        <Switch>
            <Route path={'/clientes'} component={MainClientes} />
            <Route path={'/inserirCliente'} component={InserirClientes} />
            <Route path={'/detalhesCliente/:id'} component={DetalhesClientes} />
            <Route path={'/excluirCliente/:id'} component={ExcluirClientes} />
            <Route path={'/editarCliente/:id'} component={EditarClientes} />
        </Switch>
    )
}