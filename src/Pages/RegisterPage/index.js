import React from "react";
import "./style.scss";

import LogoMobile from "../../Assets/Images/logo-mobile.png";
import Egresado from "../../Assets/Icons/graduated.svg";
import Universidad from "../../Assets/Icons/professor.svg";
import Empresa from "../../Assets/Icons/manager.svg";

export default function RegisterPage(props){ 
        return(
            <div className="register-container">            
                  <div className="register-right">
                        <div className="register-header"><h2>Registrarse</h2></div>					
                        <form className="register-form">
                              <div class="form-input">
                                    <input type="text" name="name" placeholder="Nombre" required/>
                              </div>
                              <div class="form-input">
                                    <input type="text" name="lastName" placeholder="Apellido" required/>
                              </div>
                              <div class="form-input">
                                    <input type="text" name="email" placeholder="Correo" required/>
                              </div>
                              <div class="form-input">
                                    <input type="password" name="password" placeholder="Contraseña" required/>
                              </div>
                              <div className="form-radio">
                                    <span>Role</span>
                                    <label class="" title="Egresado">
                                          <input type="radio" name="Role" value="Egresado" required/>
                                          <img src={Egresado} alt="" />
                                    </label>
                                    <label class="" title="Universidad">
                                          <input type="radio" name="Role" value="Universidad" required/>
                                          <img src={Universidad} alt="" />
                                    </label>
                                    <label class="" title="Empresa">
                                          <input type="radio" name="Role" value="Empresa" required/>
                                          <img src={Empresa} alt="" />
                                    </label>                                    
                              </div>
                              <div class="form-btn">
                                    <button type="submit">Registrar</button>
                              </div>
                        </form>
                        <div class="row">
                              <p>Ya tienes cuenta? <a href="/login">Inicia Sesion Aqui</a></p>
                        </div>
                </div>
                <div className="register-left">
                  <div className="register-logo">                  
                      <a href="/"><img src={LogoMobile} alt="" /></a>
                  </div>
                  <span>EGRESAPP</span>
            </div>
          </div> 
        );
};