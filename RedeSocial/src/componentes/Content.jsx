import {Switch, Route} from 'react-router-dom';
import Hero from '../paginas/Hero';
import Login from '../paginas/Login';
import Cadastro from '../paginas/Cadastro';
import NotFound from '../paginas/NotFound';

function Content(){
    return(
            <>
            <section className='content'>
                <div className='ajuste'>
                <Switch>
                    <Route exact path='/' component={Hero}/>
                    <Route exact path='/Login' component={Login}/>
                    <Route exact path='/Cadastro' component={Cadastro}/>
                    <Route component={NotFound}/>
                </Switch>
                </div>

            </section>
            </>
    )
}

export default Content;