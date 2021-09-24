import React, { Fragment,useState } from "react";
import "./style.scss";

//librerias
import Media from "react-media";
import { useHistory } from "react-router-dom";

//componenetes
import MenuHamburger from "../Menus/Hamburger";
import LoginButton from "../Buttons/Login";


//images
import Logo from "../../Assets/Images/logo.png";
import LogoMobile from "../../Assets/Images/logo-mobile.png";

//iconos
import { MdMenu, MdSearch, MdVpnKey,MdPersonAdd} from "react-icons/md";
import NavbarLink from "../Links/Navbar";

export default function Navegacion(props) {
  const [menuHamburgerClicked,setMenuHamburgerClicket] = useState(false);

  function handlerMenuHamburger(event){
    const valor = !menuHamburgerClicked;
    setMenuHamburgerClicket(valor)
  }

  const { isLogged } = props;
  let history = useHistory();
  return (
    <header className="navbar-container">
      <Media
        queries={{
          small: "(max-width: 480px)",
          medium: "(min-width: 481px) and ((max-width: 1024px)",
          large: "(min-width: 1025px)",
        }}
      >
        {(matches) => (
          <Fragment>
            {matches.small && (
              
              <div className="nav-container">
                <div className="nav-left-side">
                  <button type="button" className="btn-nav" onClick={handlerMenuHamburger}>
                    <MdMenu size="30px" />
                  </button>
                  <div className="logo" onClick={() => history.push("/")}>
                    <img src={LogoMobile} alt="logo" title="Egresapp"/>
                  </div>
                </div>
                <div className="nav-right-side">
                  <button type="button" className="btn-nav" title="Search">
                    <MdSearch size="30px" />
                  </button>
                  <button type="button" className="btn-nav" title="Iniciar Sesion">
                    <MdVpnKey size="30px" />
                  </button>
                  <button type="button" className="btn-nav" title="Registrar">
                    <MdPersonAdd size="30px" />
                  </button>
                </div>
                {menuHamburgerClicked && (<MenuHamburger/>)}
              </div>
              
            )}

            {matches.medium && (
              <div className="nav-container">
                <div className="nav-left-side">
                  <button type="button" className="btn-nav">
                    <MdMenu size="30px" />
                  </button>
                  <div className="logo" onClick={() => history.push("/")}>
                    <img src={LogoMobile} alt="logo" title="Egresapp"/>
                  </div>
                  
                </div>
                <div className="nav-right-side">
                  <form className="container-search">
                    <input className="input-search" type="text" name="search" />
                    <button type="submit" className="button-search" title="Search">
                      <MdSearch size="25px" />
                    </button>
                  </form>
                  <LoginButton text="Iniciar Sesion" page="/login" />
                  <LoginButton text="Registrarse" page="/register" />
                </div>
              </div>
            )}

            {matches.large && (
              <div className="nav-container">
                <div className="nav-left-side">
                  <div className="logo" onClick={() => history.push("/")}>
                    <img src={Logo} alt="logo" />
                  </div>
                  <form className="container-search">
                    <input className="input-search" type="text" name="search" />
                    <button type="submit" className="button-search">
                      <MdSearch size="30px" />
                    </button>
                  </form>
                </div>
                <div className="nav-right-side">
                  <ul className="links-container">
                    <NavbarLink text="Egresados" />
                    <NavbarLink text="Universidades" />
                    <NavbarLink text="Empresas" />
                  </ul>
                  <LoginButton text="Iniciar Sesion" page="/login" />
                  <LoginButton text="Registrarse" page="/register" />
                </div>
              </div>
            )}
          </Fragment>
        )}
      </Media>
    </header>
  );
}
