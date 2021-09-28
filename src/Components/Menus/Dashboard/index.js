import React, { Fragment } from "react";
import "./style.scss";

//librerias
import Media from "react-media";

//componentes
import MenuDashboardButton from "../../Buttons/MenuDashboard";

//icons
import VacantesIcon from "../../../Assets/Icons/employee.svg";
import AplicacionesIcon from "../../../Assets/Icons/hiring.svg";
import EgresadosIcon from "../../../Assets/Icons/graduation-cap.svg";
import ValidacionIcon from "../../../Assets/Icons/validation.svg"

export default function MenuDashboard(props) {
  const { userLogged } = props;
  const { _id, name, lastName, picture, email, role } = userLogged;

  return (
    /*<aside className="menu-dashboard-container">
      <div className="menu-dashboard-header">
        <img src={picture} alt="" />
        <h4>{`${name} ${lastName}`}</h4>
        <h3>{role}</h3>
      </div>
      <div className="menu-dashboard-links"></div>
    </aside>*/
    <Media
      queries={{
        small: "(max-width: 480px)",
        large: "(min-width: 481px)",
      }}
    >
      {(matches) => (
        <Fragment>
          {matches.small && (
            <aside className="menu-dashboard-container">
              <div className="menu-dashboard-header">
                <img src={picture} alt="User" title={`${name} ${lastName}`} />
                <div className="d-flex flex-column m-1">
                  <span>{`${name} ${lastName}`}</span>
                  <span>{role}</span>
                </div>
                
              </div>
              <div className="menu-dashboard-buttons">
              {role === "Egresado" && (
                  <>
                    <MenuDashboardButton icon={VacantesIcon} text="Vacantes"/>
                    <MenuDashboardButton icon={AplicacionesIcon} text="Aplicaciones"/>                    
                  </>
                )}
                {role === "Empresa" && (
                  <>
                    <MenuDashboardButton icon={EgresadosIcon} text="Egresado"/>
                    <MenuDashboardButton icon={VacantesIcon} text="Vacantes"/> 
                  </>
                )}
                {role === "Universidad" && (
                  <MenuDashboardButton icon={ValidacionIcon} text="Validaciones"/>
                )}
              </div>
            </aside>
          )}

          {matches.large && (
            <aside className="menu-dashboard-container">
              <div className="menu-dashboard-header">
                <img src={picture} alt="" />
                <h4>{`${name} ${lastName}`}</h4>
                <h3>{role}</h3>
              </div>
              <div className="divider"></div>
              <div className="menu-dashboard-buttons">
                {role === "Egresado" && (
                  <>
                    <MenuDashboardButton icon={VacantesIcon} text="Vacantes"/>
                    <div className="divider"></div>
                    <MenuDashboardButton icon={AplicacionesIcon} text="Aplicaciones"/>                    
                  </>
                )}
                {role === "Empresa" && (
                  <>
                    <MenuDashboardButton icon={EgresadosIcon} text="Egresado"/>
                    <div className="divider"></div>
                    <MenuDashboardButton icon={VacantesIcon} text="Vacantes"/> 
                  </>
                )}
                {role === "Universidad" && (
                  <MenuDashboardButton icon={ValidacionIcon} text="Validaciones"/>
                )}
              </div>
            </aside>
          )}
        </Fragment>
      )}
    </Media>
  );
}
