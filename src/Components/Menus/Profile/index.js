import React from "react";
import "./style.scss";

//librerias
import { animated } from "react-spring";

//componentes
import MenuProfileLink from "../../Links/MenuProfile";
import LogoutLink from "../../Links/Logout";

export default function MenuProfile(props) {
  const { style,userLogged,handlerLogOut } = props;
  const {name,lastName,email} = userLogged

  return (
    <animated.aside style={style} className="profile-menu">      
      <div>
        <div className="profile-title">
          <p className="profile-user">{`${name} ${lastName}`}</p>
          <p className="profile-email">{`${email}`}</p>
        </div>
        <div className="separador"></div>
        <MenuProfileLink text="Dashboard" page="/dashboard"/>
        <div className="separador"></div>
        <LogoutLink text="Salir" handlerLogOut={handlerLogOut}/>
      </div>
    </animated.aside>
  );
}
