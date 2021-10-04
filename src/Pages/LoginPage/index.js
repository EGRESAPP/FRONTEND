import React from "react";
import "./style.scss";

import LogoMobile from "../../Assets/Images/logo-mobile.png";

export default function LoginPage(props) {
  return (    
      <div className="login-container">
        <div className="login-left">
              <div className="login-logo">                  
                  <a href="/"><img src={LogoMobile} alt="" /></a>
              </div>
              <span>EGRESAPP</span>
        </div>
        <div className="login-right">
		<div className="login-header"><h2>Log in</h2></div>					
		<form className="login-form">
			<div class="form-input">
				<input type="text" name="username" placeholder="Username"/>
			</div>
			<div class="form-input">
				<input type="password" name="password" placeholder="Password"/>
			</div>
			<div class="form-check">
                        <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
                        <label for="exampleCheck1">Recuerdame</label>
                  </div>
			<div class="form-btn">
				<button type="button"> Iniciar Sesion</button>
			</div>
		</form>
		<div class="row">
			<p>No tienes cuenta? <a href="/register">Registrate Aqui</a></p>
		</div>
	      </div>
      </div>
  );
}
