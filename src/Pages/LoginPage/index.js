import React, { useState } from "react";
import "./style.scss";

//imagines
import LogoMobile from "../../Assets/Images/logo-mobile.png";
import Egresado from "../../Assets/Icons/graduated.svg";
import Universidad from "../../Assets/Icons/professor.svg";
import Empresa from "../../Assets/Icons/manager.svg";

//librerias
import swal from 'sweetalert';
import { useHistory } from "react-router";

//servicio
import { login } from "../../Lib/api";

export default function LoginPage(props) {
  const history = useHistory();
  const { handlerIsLogged, handlerUserLogged } = props;

  
  async function loginHandler(event) {
    event.preventDefault();
    console.log(event.target);
    const email = event.target.elements.email.value;
    const password = event.target.elements.password.value;
    const entity = event.target.elements.role.value;
      const response = await login({ email, password, entity });
      if (response.success === true) {
        swal("EXITO!", "Se inicio correctamente", "success");
        handlerUserLogged(JSON.stringify(response.data));
        handlerIsLogged(true);
        localStorage.setItem("userData", JSON.stringify(response.data));
        history.push(`/dashboard`);
      } else {
        swal("ERROR!", response.error, "error");
      }    
  }
  return (
    <div className="login-container">      
      <div className="login-left">
        <div className="login-logo">
          <a href="/">
            <img src={LogoMobile} alt="" />
          </a>
        </div>
        <span>EGRESAPP</span>
      </div>
      <div className="login-right">
        <div className="login-header">
          <h2>Log in</h2>
        </div>
        <form className="login-form" onSubmit={loginHandler}>
          <div class="form-input">
            <input type="text" name="email" placeholder="Username" required />
          </div>
          <div class="form-input">
            <input
              type="password"
              name="password"
              placeholder="Password"
              required
            />
          </div>
          <div className="form-radio">
            <span>Entidad</span>
            <label class="" title="Egresado">
              <input type="radio" name="role" value="Graduates" required />
              <img src={Egresado} alt="" />
            </label>
            <label class="" title="Universidad">
              <input type="radio" name="role" value="Universities" required />
              <img src={Universidad} alt="" />
            </label>
            <label class="" title="Empresa">
              <input type="radio" name="role" value="Companies" required />
              <img src={Empresa} alt="" />
            </label>
          </div>
          <div class="form-check">
            <input
              type="checkbox"
              class="form-check-input"
              id="exampleCheck1"
            />
            <label for="exampleCheck1">Recuerdame</label>
          </div>
          <div class="form-btn">
            <button type="submit"> Iniciar Sesion</button>
          </div>
        </form>
        <div className="link-register">
          <p>
            No tienes cuenta? <a href="/register">Registrate Aqui</a>
          </p>
        </div>
      </div>
    </div>
  );
}
