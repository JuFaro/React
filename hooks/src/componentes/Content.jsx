import React from 'react';
import{Switch, Route} from 'react-router-dom';
import './Content.css';
import Home from '../exemplos/Home';
import Login from '../exemplos/Login';
import Parcelas from '../exemplos/Parcelas';
import UseState from '../exemplos/UseState';
import UseEffect from '../exemplos/UseEffect';
import FormDados from '../exemplos/FormDados';
import CreateContext from '../exemplos/CreateContext';
import ContextNovo from '../exemplos/ContextNovo';
import UseCallback from '../exemplos/UseCallback';
import PaiCallback from '../exemplos/PaiCallback';
import UseMemo from '../exemplos/UseMemo';
import UseReducer from '../exemplos/UseReducer';
import CalcReducer from '../exemplos/CalcReducer';
import Jubileu from '../exemplos/Jubileu';


function Content() {
    return (
     <main className='Content'>
         <Switch>
             <Route extact path='/home'><Home/></Route>
             <Route extact path='/login'><Login/></Route>
             <Route extact path='/contextNovo'><ContextNovo/></Route>
             <Route extact path='/parcelas'><Parcelas/></Route>
             <Route extact path='/useState'><UseState/></Route>
             <Route extact path='/useEffect'><UseEffect/></Route>
             <Route extact path='/formDados'><FormDados/></Route>
             <Route extact path='/createContext'><CreateContext/></Route>
             <Route extact path='/useReducer'><UseReducer/></Route> 
             <Route extact path='/calcReducer'><CalcReducer/></Route>
             <Route extact path='/useMemo'><UseMemo/></Route>
             <Route extact path='/jubileu'><Jubileu/></Route>
             <Route extact path='/useCallback'><UseCallback/></Route>
             <Route extact path='/paiCallback'><PaiCallback/></Route>
             
            
         </Switch>

     </main>
    );
  }
   
  export default Content;