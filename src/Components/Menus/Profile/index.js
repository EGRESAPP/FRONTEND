import React from "react";
import "./style.scss";

//librerias
import { animated } from "react-spring";

//componentes
import MenuProfileButton from "../../Buttons/MenuProfile";
import LogoutButton from "../../Buttons/Logout";

export default function MenuProfile(props) {
  const { style,name,lastName,email,handlerLogged } = props;
  return (
    <animated.aside style={style} className="profile-menu">      
      <div>
        <div className="profile-title">
          <p className="profile-user">{`${name} ${lastName}`}</p>
          <p className="profile-email">{`${email}`}</p>
        </div>
        <div className="separador"></div>
        <MenuProfileButton text="Dashboard" page="/dashboard"/>
        <MenuProfileButton text="Settings" page="/settings"/>
        <div className="separador"></div>
        <LogoutButton text="Salir" handlerLogged={handlerLogged}/>
      </div>
    </animated.aside>
  );
}
