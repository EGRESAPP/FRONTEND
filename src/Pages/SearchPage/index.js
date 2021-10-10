import React, { useState, useEffect, Fragment } from "react";
import "./style.scss";

import Media from "react-media";
import { useLocation } from "react-router-dom";

//servicio
import { getByEntity } from "../../Lib/api";

//componentes
import CardUser from "../../Components/Cards/SearchCard";
import InputSearch from "../../Components/Inputs/Search";

export default function SearchPage(props) {
  const { token } = props;
  const parameters = new URLSearchParams(useLocation());
  const search = parameters.get('q');
  const [userData, setUserData] = useState();

  useEffect(()=>{    
    async function setData(token,url){        
        const response = await getByEntity(token,"/companies");
        setUserData(response.data)
    }    
    setData(token,"/users");
  },[]);

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
            <div className="search-container">
              <div className="search-header">
                <InputSearch />
                <div className="search-filter">
                  <button type="button" className="btn-search">
                    Recientes
                  </button>
                  <button type="button" className="btn-search">
                    Antiguos
                  </button>
                </div>
              </div>
              <div className="search-main">
                <aside className="search-options">
                  <button type="button" className="btn-search">
                    Egresados
                  </button>
                  <button type="button" className="btn-search">
                    Univesidades
                  </button>
                  <button type="button" className="btn-search">
                    Empresas
                  </button>
                  <button type="button" className="btn-search">
                    Vacantes
                  </button>
                </aside>
                <CardUser />
              </div>
            </div>
          )}
          {matches.large && (
            <div className="search-container">
              <div className="search-header">
                <div className="search-result">
                  <h3>Resultados: {search}</h3>
                </div>
                <div className="search-filter">
                  <button type="button" className="btn-search">
                    Recientes
                  </button>
                  <button type="button" className="btn-search">
                    Antiguos
                  </button>
                </div>
              </div>
              <div className="search-main">
                <aside className="search-options">
                  <div>
                    <h3>Categorias</h3>
                  </div>
                  <div className="search-buttons-options">
                    <button type="button" className="btn-search">
                      Egresados
                    </button>
                    <button type="button" className="btn-search">
                      Univesidades
                    </button>
                    <button type="button" className="btn-search">
                      Empresas
                    </button>
                    <button type="button" className="btn-search">
                      Vacantes
                    </button>
                  </div>
                </aside>
                <CardUser />
              </div>
            </div>
          )}
        </Fragment>
      )}
    </Media>
  );
}
