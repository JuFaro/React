import React from 'react';
import {Link} from 'react-router-dom';
import Logo from '../img/logo.png'

function Header(){
    return(
    <header class="col-md-12">
      <nav>
          <div class="row justify-content-between pt-2 mx-5">
          <Link to='/'><img src={Logo} alt="Corujita Social" width="60px" />  </Link>
          <h1 id="tituloJFR">Corujita Social</h1>
              <ul class="row justify-content-center p-2 ">
                <li><Link to='/' class="p-2 font-weight-bold" >Início</Link></li>
                <li><Link to='/Login' class="p-2 font-weight-bold" >Login</Link></li>
                <li><Link to='/Cadastro' class="p-2 font-weight-bold" >Cadastro</Link></li>         
              </ul>
          </div>
      </nav>
  </header>

    )
}

export default Header;