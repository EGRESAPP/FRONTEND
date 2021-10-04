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
      title: "Information Systems Manager",
      description:
        "in ante vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae duis faucibus accumsan odio curabitur convallis duis consequat dui nec nisi volutpat eleifend.",
      cover: cover1,
      avatar: avatar1,
    },
    {
      name: "Bobbee",
      lastName: "Lee",
      title: "Social Worker",
      description:
        "sed accumsan felis ut at dolor quis odio consequat varius integer ac leo pellentesque ultrices mattis odio donec vitae nisi nam ultrices libero non mattis pulvinar nulla pede.",
      cover: cover2,
      avatar: avatar2,
    },
    {
      name: "Gianina",
      lastName: "Minithorpe",
      title: "Software Consultant",
      description:
        "ullamcorper augue a suscipit nulla elit ac nulla sed vel enim sit amet nunc viverra dapibus nulla suscipit ligula in lacus curabitur at ipsum ac tellus semper interdum mauris ullamcorper.",
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
                  <h1>Comienza hoy y busca la mejor opcion</h1>
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
                  <h1>Comienza hoy y busca la mejor opcion</h1>
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
                  <h1>No sabes por donde Empezar?</h1>
                </div>
                <div className="landing-guia-body">
                  <div className="landing-guia-steps">
                    <FaClipboardList size="60px" className="lading-icon" />
                    <span>Registrate</span>
                  </div>
                  <div className="landing-guia-steps">
                    <FaClipboardCheck size="60px" className="lading-icon" />
                    <span>Completa tu Perfil</span>
                  </div>
                  <div className="landing-guia-steps">
                    <FaSearch size="60px" className="lading-icon" />
                    <span>Comieza a buscar</span>
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
