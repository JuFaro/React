import {Switch, Route} from 'react-router-dom';
import MainUsuarios from '../pages/Usuarios/Main';
import InserirUsuario from '../pages/Usuarios/Inserir'
import DetalhesUsuario from '../pages/Usuarios/Detalhes';
import ExcluirUsuario from '../pages/Usuarios/Excluir';
import EditarUsuario from '../pages/Usuarios/Editar';

export default function UsuariosRoutes(){
    return(
        <Switch>
            <Route path={'/usuarios'} component={MainUsuarios} />
            <Route path={'/inserirUsuario'} component={InserirUsuario} />
            <Route path={'/detalhesUsuario/:id'} component={DetalhesUsuario} />
            <Route path={'/excluirUsuario/:id'} component={ExcluirUsuario} />
            <Route path={'/editarUsuario/:id'} component={EditarUsuario} />
        </Switch>
    )
}