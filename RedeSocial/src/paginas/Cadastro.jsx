import React from 'react';
import {validadata, validacaoEmail} from '../FormUsers'

const Cadastro=()=>{
    return(
        <div className="container">
        <div className="row">
          <form name="cad" id="formCad" className="col-md-6 mx-auto mt-n5" action="/usuarios/cadastrarUsuarios" method="POST">
            <p className="h2 text-md-center text-primary mb-4">Cadastre-se!</p>
            {/* <!-- Nome | Sobrenome --> */}
            <div className="form-row">
              <div className="form-group col-md-6">
                <input type="text" className="form-control" name="nome" id="nome" placeholder="Nome" required/>
              </div>
              <div className="form-group col-md-6 ">
                <input type="text" className="form-control" name="sobrenome" id="sobrenome" placeholder="Sobrenome" required/>
              </div>
            </div>
            {/* <!-- E-mail --> */}
            <div className="form-row">
              <div className="form-group col-md">
                <input type="text" className="form-control" name="email" id="email" placeholder="E-mail"
                  required/>
                <div id="msgemail"></div>
              </div>
            </div>
            {/* <!-- Senha--> */}
            <div className="form-row">
              <div className="form-group col-md" >
                <input type="password" className="form-control"  name="senha" id="senha"
                  pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" placeholder="Senha"
                  title="Deve conter ao menos 1 número, uma letra maiúscula e uma minúscula e, no mínimo, 8 caracteres"
                  required/>
                  <p id="demo"></p>
                 
    
                <div id="message">
                  <h4>A Senha deve conter:</h4>
                  <p id="letter" className="invalid">uma letra <strong>minúscula</strong> </p>
                  <p id="capital" className="invalid">uma letra <strong>maiúscula</strong> </p>
                  <p id="number" className="invalid">Um <strong>número</strong></p>
                  <p id="length" className="invalid">Mínimo <strong>8 caracteres</strong></p>
                </div>
              </div>
            </div>
            {/* <!-- Nascimento | Genero --> */}
            <div className="form-row">
              <div className="form-group col-md-6">
                <label for="nascimento">Data Nascimento</label>
                <input type="date" name="nascimento" id="nascimento" className="form-control"
                 onBlur={validadata}/>
                <div id="dataTxt"></div>
              </div>
              <div className="form-group col-md-6">
                <label for="gender">Genêro:</label>
                <select className="form-control" name="gender" id="gender" oninput="verificarPronome()">
                  <option selected="1" value="" disabled="1">Selecione seu Genêro</option>
                  <option value="Feminino">Feminino</option>
                  <option value="Masculino">Masculino</option>
                  <option value="Personalizado">Personalizado</option>
                </select>
              </div>
            </div>
            {/* <!-- Personalizado --> */}
            <div className="form-row" id="divPersonalizada">
              <div className="form-group col-md" data-type="selectors" data-name="pronomePreferencia">
                <select className="form-control" aria-label="Selecione seu pronome" id="pronomePreferencia" name="pronomePreferencia">
                  <option selected="1" value="" disabled="1">Selecione seu pronome</option>
                  <option value="1">Feminino: "Deseje a ela um feliz aniversário!"</option>
                  <option value="2">Masculino: "Deseje a ele um feliz aniversário!"</option>
                  <option value="6">Neutro: "Deseje a ele(a) um feliz aniversário!"</option>
                </select>
              </div>
            </div>
    
            <button type="submit" onclick="myFunction()" className="btn btn-primary">Cadastre-se</button>
            
          </form>
          

            
    
        </div>
      </div>
      
    )
}

export default Cadastro;