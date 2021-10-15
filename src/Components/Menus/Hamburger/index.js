import React from "react";
import "./style.scss";
import { animated } from "react-spring";

//componentes
import MenuHamburgerLink from "../../Links/MenuHamburger";
import InputSearch from "../../Inputs/Search";

//iconos
import { MdArrowBack } from "react-icons/md";
import IconEgresado from "../../../Assets/Icons/graduation-cap.svg";
import IconEmpresa from "../../../Assets/Icons/gear.svg";
import IconUni from "../../../Assets/Icons/university.svg";

export default function MenuHamburger(props) {
  const { handlerMenuHamburger, style } = props;

  return (
    <animated.aside style={style} className="hamburger-menu">
      <div className="header">
        <h3>MENU</h3>
        <button type="button" className="btn-close" onClick={handlerMenuHamburger}>
          <MdArrowBack size="30px" />
        </button>
      </div>
      <InputSearch/>
      <div>
        <MenuHamburgerLink text="Egresados" icon={IconEgresado} page="/search/graduates"/>
        <MenuHamburgerLink text="Empresas" icon={IconEmpresa} page="/search/companies"/>
        <MenuHamburgerLink text="Universidades" icon={IconUni} page="/search/universities"/>
      </div>
    </animated.aside>
  );
}
