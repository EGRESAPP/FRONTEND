import React, { useState } from "react";
import "./style.scss";

import LogoMobile from "../../Assets/Images/logo-mobile.png";
import Egresado from "../../Assets/Icons/graduated.svg";
import Universidad from "../../Assets/Icons/professor.svg";
import Empresa from "../../Assets/Icons/manager.svg";

//componentes
import CustomAlert from "../../Components/Alert";

//libreria
import { useHistory } from "react-router";

//servicio
import { register,login } from "../../Lib/api";

export default function RegisterPage(props) {

  const history = useHistory();
  const { handlerIsLogged, handlerUserLogged } = props;

  const [entity, setEntity] = useState("Graduates");
  const [alertVisible, setAlertVisible] = useState(false);
  const [alertClass, setAlertClass] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");

  const handleVisible = (timeout) => {
    setAlertVisible(true);
    setTimeout(() => {
      setAlertVisible(false);      
    }, timeout);
    
  };

  async function registerHandler(event) {
    event.preventDefault();
    const name = event.target.elements.name.value;
    const lastName = event.target.elements.lastName.value;
    const email = event.target.elements.email.value;
    const password = event.target.elements.password.value;
    let response;
      if(entity === "Graduates"){
            response = await register({ name,lastName,email, password }, entity);
      }else{
            response = await register({ name,email, password }, entity);
      }
   
    if (response.success === true) {
      setAlertMessage("Se ha creado el usuario con exito");
      setAlertClass(true);     
      handleVisible(7000);
      response = await login({ email, password, entity });
      handlerUserLogged(JSON.stringify(response.data));
      handlerIsLogged(true);
      localStorage.setItem("userData", JSON.stringify(response.data));
      history.push("/dashboard")
    } else {
      setAlertMessage(response.error);
      setAlertClass(false); 
      handleVisible(3000);
    }
  }

  return (
    <div className="register-container">
      {alertVisible && (
        <CustomAlert
          clase={alertClass ? "exito" : "error"}
          message={alertMessage}
        />
      )}
      <div className="register-right">
        <div className="register-header">
          <h2>Registrarse</h2>
        </div>
        <form className="register-form" onSubmit={registerHandler}>
          <div
            className="form-radio"
            onChange={(e) => {
              setEntity(e.target.value);
            }}
          >
            <span>Entidad</span>
            <label class="" title="Egresado">
              <input type="radio" name="Role" value="Graduates" required />
              <img src={Egresado} alt="" />
            </label>
            <label class="" title="Universidad">
              <input type="radio" name="Role" value="Universities" required />
              <img src={Universidad} alt="" />
            </label>
            <label class="" title="Empresa">
              <input type="radio" name="Role" value="Companies" required />
              <img src={Empresa} alt="" />
            </label>
          </div>
          {entity === "Graduates" && (
            <>
              <div class="form-input">
                <input type="text" name="name" placeholder="Nombre" required />
              </div>
              <div class="form-input">
                <input
                  type="text"
                  name="lastName"
                  placeholder="Apellido"
                  required
                />
              </div>
            </>
          )}
          {entity === "Companies" && (
            <>
              <div class="form-input">
                <input type="text" name="name" placeholder="Empresa" required />
              </div>
            </>
          )}
          {entity === "Universities" && (
            <>
              <div class="form-input">
                <input
                  type="text"
                  name="name"
                  placeholder="Universidad"
                  required
                />
              </div>
            </>
          )}

          <div class="form-input">
            <input type="text" name="email" placeholder="Correo" required />
          </div>
          <div class="form-input">
            <input
              type="password"
              name="password"
              placeholder="Contraseña"
              required
            />
          </div>

          <div class="form-btn">
            <button type="submit">Registrar</button>
          </div>
        </form>
        <div class="row">
          <p>
            Ya tienes cuenta? <a href="/login">Inicia Sesion Aqui</a>
          </p>
        </div>
      </div>
      <div className="register-left">
        <div className="register-logo">
          <a href="/">
            <img src={LogoMobile} alt="" />
          </a>
        </div>
        <span>EGRESAPP</span>
      </div>
    </div>
  );
}
