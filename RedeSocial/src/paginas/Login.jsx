import React from 'react';

function Login(){
    return(
        <div className="container">
        <div className="row">
          <form name="cad" id="formCad" className="col-md-5 m-2 p-4" action="/publicacoes/cadastrarPublicacoes" method="POST">
    
            <div className="my-auto mx-auto">
              <p className="h2 text-md-center">Informações de Login</p>
              <div className="col mx-auto">
                <h4>Login:</h4> 
                <div className="input-container">
                  <i className="fa fa-user icon"></i>
                  <input type="text" id="userlogin" name="userlogin" required/>
                </div>
              </div>
              <div className="col mx-auto">
                <h4>Senha:</h4> 
                <div className="input-container">
                  <i className="fa fa-key icon"></i><input type="password" value="" required/>
    
                </div>
              </div >
              <div className="row my-2 ">
                <button type="submit" className="btn btn-primary text-md-center mx-auto ">Entrar</button>
              </div>
            </div>
    
          </form>
    
          
          <p id="demo"></p>
    
          <div id="txtImpacto" className="col-md-4 my-auto mx-auto text-center">
            <p className="row">  Entre para a Rede Social mais Badalada da Internet  </p> 
                   
          </div>

          
    
        </div>
        
      
      </div>
    )
}

export default Login;