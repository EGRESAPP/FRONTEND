import React, { Fragment } from "react";
import "./style.scss";

//librerias
import Media from "react-media";

//img
import Cover from "../../Assets/Images/cover.png";
import WaveU from "../../Assets/Images/wave-up.svg";
import WaveB from "../../Assets/Images/wave-b.svg";
import avatar1 from "../../Assets/Images/Bryanty.jpg";
import avatar2 from "../../Assets/Images/Bobbee.jpg";
import avatar3 from "../../Assets/Images/Gianina.jpg";
import cover1 from "../../Assets/Images/cover1.jpg";
import cover2 from "../../Assets/Images/cover2.jpg";
import cover3 from "../../Assets/Images/cover3.jpg";
import uno from "../../Assets/Images/number-one.png";
import dos from "../../Assets/Images/number-2.png";
import tres from "../../Assets/Images/number-3.png";

//icons
import {
  FaClipboardList,
  FaClipboardCheck,
  FaSearch,
  FaClipboard,
} from "react-icons/fa";

//componentes
import CardLanding from "../../Components/Cards/LandingCard";

export default function LandingPage(props) {
  const users = [
    {
      name: "Bryanty",
      lastName: "Snepp",
      title: "Un excelente inicio",
      description:
        "Por algun lado debes empezar para poder desarrollarte de manera profesional y Egresapp te ayuda a conseguirlo",
      cover: cover1,
      avatar: avatar1,
    },
    {
      name: "Bobbee",
      lastName: "Lee",
      title: "Me ayudo a encontrar trabajo",
      description:
        "Gracias a Egresapp encontre donde realizar mis practicas y cuando termino el periodo me contrataron",
      cover: cover2,
      avatar: avatar2,
    },
    {
      name: "Gianina",
      lastName: "Minithorpe",
      title: "Facil de usar",
      description:
        "Estaba buscando un aplicacion facil de usar ya que no soy muy apto para la tegnologia",
      cover: cover3,
      avatar: avatar3,
    },
  ];

  return (
    <Media
      queries={{
        small: "(max-width: 480px)",
        large: "(min-width: 481px)",
      }}
    >
      {(matches) => (
        <Fragment>
          {matches.small && (
            <div className="landing-container">
              <div className="landing-header">
                <div className="landing-header-right">
                  <span className="landing-title">Elije la mejor opcion</span>
                  <span className="landing-message">
                    Registrate y encuentra el mejor trabajo o donde realizar tus
                    practicas profecionales
                  </span>
                  <a className="landing-link" href="/register">
                    Registrate
                  </a>
                  <img src={Cover} alt="" />
                </div>
              </div>
              <div className="landing-body">
                <div className="landing-body-title">
                  <h1>Lee algunas de las opiniones de nuestros usuarios</h1>
                </div>
                <div className="landing-body-card">
                  {users.map((user, index) => {
                    const {
                      name,
                      lastName,
                      title,
                      avatar,
                      cover,
                      description,
                    } = user;
                    return (
                      <CardLanding
                        key={index}
                        name={name}
                        lastName={lastName}
                        title={title}
                        avatar={avatar}
                        cover={cover}
                        description={description}
                      />
                    );
                  })}
                </div>
              </div>
              <div className="landing-guia">
                <div className="landing-guia-title">
                  <h1>¿No sabes por donde Empezar?</h1>
                </div>
                <div className="landing-guia-body">
                <div className="card-flip">
                    <div className="flip-front">
                      <img src={uno} alt="" />
                    </div>
                    <div className="flip-back">
                      <FaClipboardList size="60px" className="lading-icon" />
                      <span>Registrate</span>
                    </div>
                  </div>
                  <div className="card-flip">
                    <div className="flip-front">
                      <img src={dos} alt="" />
                    </div>
                    <div className="flip-back">
                      <FaClipboardCheck size="60px" className="lading-icon" />
                      <span>Completa tu Perfil</span>
                    </div>
                  </div>
                  <div className="card-flip">
                    <div className="flip-front">
                      <img src={tres} alt="" />
                    </div>
                    <div className="flip-back">
                      <FaSearch size="60px" className="lading-icon" />
                      <span>Comieza a buscar</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
          {matches.large && (
            <div className="landing-container">
              <div className="landing-header">
                <div className="curved-up">
                  <img src={WaveB} alt="" />
                </div>
                <div className="landing-header-left">
                  <img src={Cover} alt="" />
                </div>
                <div className="landing-header-right">
                  <span className="landing-title">Elije la mejor opcion</span>
                  <span className="landing-message">
                    Registrate y encuentra el mejor trabajo o donde realizar tus
                    practicas profecionales
                  </span>
                  <a className="landing-link" href="/register">
                    Registrate
                  </a>
                </div>
                <div className="curved">
                  <img src={WaveU} alt="" />
                </div>
              </div>
              <div className="landing-body">
                <div className="landing-body-title">
                <h1>Lee algunas de las opiniones de nuestros usuarios</h1>
                </div>
                <div className="landing-body-card">
                  {users.map((user, index) => {
                    const {
                      name,
                      lastName,
                      title,
                      avatar,
                      cover,
                      description,
                    } = user;
                    return (
                      <CardLanding
                        key={index}
                        name={name}
                        lastName={lastName}
                        title={title}
                        avatar={avatar}
                        cover={cover}
                        description={description}
                      />
                    );
                  })}
                </div>
              </div>
              <div className="landing-guia">
                <div className="landing-guia-title">
                  <h1>¿No sabes por donde Empezar?</h1>
                </div>
                <div className="landing-guia-body">
                  <div className="card-flip">
                    <div className="flip-front">
                      <img src={uno} alt="" />
                    </div>
                    <div className="flip-back">
                      <FaClipboardList size="60px" className="lading-icon" />
                      <span>Registrate</span>
                    </div>
                  </div>
                  <div className="card-flip">
                    <div className="flip-front">
                      <img src={dos} alt="" />
                    </div>
                    <div className="flip-back">
                      <FaClipboardCheck size="60px" className="lading-icon" />
                      <span>Completa tu Perfil</span>
                    </div>
                  </div>
                  <div className="card-flip">
                    <div className="flip-front">
                      <img src={tres} alt="" />
                    </div>
                    <div className="flip-back">
                      <FaSearch size="60px" className="lading-icon" />
                      <span>Comieza a buscar</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </Fragment>
      )}
    </Media>
  );
}
