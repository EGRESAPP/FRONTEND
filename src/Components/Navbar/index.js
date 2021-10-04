import React, { Fragment, useState } from "react";
import "./style.scss";

//librerias
import Media from "react-media";
import { useHistory } from "react-router-dom";
import {useTransition} from "react-spring"

//componenetes
import MenuHamburger from "../Menus/Hamburger";
import LoginButton from "../Buttons/Login";

//images
import Logo from "../../Assets/Images/logo.png";
import LogoMobile from "../../Assets/Images/logo-mobile.png";

//iconos
import {
  MdMenu,
  MdSearch,
  MdVpnKey,
  MdPersonAdd,
  MdPerson,
} from "react-icons/md";
import NavbarLink from "../Links/Navbar";
import InputSearch from "../Inputs/Search";
import MenuProfile from "../Menus/Profile";

export default function Navegacion(props) {

  const { isLogged,handlerLogged } = props;
  let history = useHistory();

  const [menuHamburgerVisible, setMenuHamburgerVisble] = useState(false);
  const [menuProfileVisible, setMenuprofileVisble] = useState(false);

  const transitionMenuHamburger=useTransition(menuHamburgerVisible,{
    from: { x:-300, opacity:0},
    enter: { x:0,opacity:1},
    leave: {x:-300,opacity:0},
  });

  const transitionMenuProfile=useTransition(menuProfileVisible,{
    from: { x:(200), opacity: 0 },
    enter: { x:0, opacity: 1},
    leave: {x:200,opacity:0},
  });


  function handlerMenuHamburger(event) {
    setMenuHamburgerVisble(!menuHamburgerVisible);
  }

  function handlerMenuProfile(event) {
    setMenuprofileVisble(!menuProfileVisible);
  }

  return (
    <header className="navbar-container">
      <Media
        queries={{
          small: "(max-width: 480px)",
          medium: "(min-width: 481px) and (max-width: 1024px)",
          large: "(min-width: 1025px)",
        }}
      >
        {(matches) => (
          <Fragment>
            {matches.small && (
              <div className="nav-container">
                <div className="nav-left-side">
                  <button  type="button" className="btn-nav" onClick={handlerMenuHamburger}>
                    <MdMenu size="30px" />
                  </button>
                  <div className="logo" onClick={() => history.push("/")}>
                    <img src={LogoMobile} alt="logo" title="Egresapp" />
                  </div>
                </div>
                <div className="nav-right-side">
                  <button type="button" className="btn-nav" title="Search">
                    <MdSearch size="30px" />
                  </button>
                  {
                    isLogged ? ( 
                          <button type="button" className="btn-nav" title="Perfil" onClick={handlerMenuProfile}>
                            <MdPerson size="30px" />
                          </button>
                      ) : (
                        <>
                          <button type="button" className="btn-nav" title="Iniciar Sesion" onClick={() => history.push("/login")}>
                            <MdVpnKey size="30px" />
                          </button>
                          <button type="button" className="btn-nav" title="Registrar" onClick={() => history.push("/register")}>
                            <MdPersonAdd size="30px" />
                          </button>
                        </>
                    )
                  }
                  {
                    transitionMenuHamburger((style, item) => (
                      item && <MenuHamburger style={style} handlerMenuHamburger={handlerMenuHamburger}/>
                    ))                    
                  }
                  {
                    isLogged && transitionMenuProfile((style, item) => (
                      item &&  <MenuProfile style={style} handlerLogged={handlerLogged}/>
                    ))                       
                  }
                </div>
                
              </div>
            )}

            {matches.medium && (
              <div className="nav-container">
                <div className="nav-left-side">
                  <button  type="button" className="btn-nav" onClick={handlerMenuHamburger}>
                    <MdMenu size="30px" />
                  </button>
                  <div className="logo" onClick={() => history.push("/")}>
                    <img src={LogoMobile} alt="logo" title="Egresapp" />
                  </div>
                </div>
                <div className="nav-right-side">
                  <InputSearch/>
                  {
                    isLogged ? ( 
                            <button type="button" className="btn-nav" title="Perfil" onClick={handlerMenuProfile}>
                              <MdPerson size="30px" />
                            </button>
                        ) : (
                          <>
                            <LoginButton text="Iniciar Sesion" page="/login"/>
                            <LoginButton text="Registrarse" page="/register"/>
                          </>
                      )
                  }
                </div>

                {
                    transitionMenuHamburger((style, item) => (
                      item && <MenuHamburger style={style} handlerMenuHamburger={handlerMenuHamburger}/>
                    ))                    
                  }
                  {
                    isLogged && transitionMenuProfile((style, item) => (
                      item &&  <MenuProfile style={style} handlerLogged={handlerLogged}/>
                    ))                       
                  }
              </div>
            )}

            {matches.large && (
              <div className="nav-container">
                <div className="nav-left-side">
                  <div className="logo" onClick={() => history.push("/")}>
                    <img src={Logo} alt="logo" />
                  </div>                  
                  <InputSearch/>
                </div>
                <div className="nav-right-side">
                  <ul className="links-container">
                    <NavbarLink text="Egresados" />
                    <NavbarLink text="Universidades" />
                    <NavbarLink text="Empresas" />

                    <button type="button" onClick={handlerLogged}>Entrar/Salir</button>
                  </ul>
                  {
                    isLogged ? ( 
                            <button type="button" className="btn-nav" title="Perfil" onClick={handlerMenuProfile}>
                              <MdPerson size="30px" />
                            </button>
                        ) : (
                          <>
                            <LoginButton text="Iniciar Sesion" page="/login"/>
                            <LoginButton text="Registrarse" page="/register"/>
                          </>
                      )
                  }
                </div>
                {
                    isLogged && transitionMenuProfile((style, item) => (
                      item &&  <MenuProfile style={style} handlerLogged={handlerLogged}/>
                    ))                       
                  }
              </div>
            )
            }

          </Fragment>
        )}
      </Media>
    </header>
  );
}
