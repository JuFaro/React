import React from 'react';
import {Link} from 'react-router-dom';
import './Menu.css';

function Menu() {
    return (
      <>
      <div className="Menu">
          <nav>
              <ul>
                  <li><Link to='/home'>Inicio</Link></li>
                  <li><Link to='/login'>Login</Link></li>
                  <li><Link to='/contextNovo'>ContextNovo</Link></li>
                  <li><Link to='/parcelas'>Parcelas</Link></li>
                  <li><Link to='/useState'>useState</Link></li>
                  <li><Link to='/formDados'>formDador</Link></li>
                  <li><Link to='/useEffect'>useEffect</Link></li>
                  <li><Link to='/useCallback'>useCallback</Link></li>
                  <li><Link to='/paiCallback'>PaiCallback</Link></li>
                  <li><Link to='/useMemo'>useMemo</Link></li>
                  <li><Link to='/jubileu'>Jubileu</Link></li>
                  <li><Link to='/createContext'>createContext</Link></li>
                  <li><Link to='/useReducer'>useReducer</Link></li>
                  <li><Link to='/calcReducer'>CalcReducer</Link></li>
              </ul>
          </nav>

      </div>
     
      </>
    );
  }
   
  export default Menu;