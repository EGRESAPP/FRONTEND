import React, { useState, useEffect, Fragment } from "react";
import "./style.scss";

import Media from "react-media";
import { useLocation, useHistory, useParams } from "react-router-dom";

//servicio
import { getByEntity } from "../../Lib/api";

//componentes
import CardUser from "../../Components/Cards/SearchCard";
import InputSearch from "../../Components/Inputs/Search";

export default function SearchPage(props) {
  const { token } = props.token
  const search = useLocation().search;
  const [entityData, setEntityData] = useState();
  const [categorySearch, setCategorySearch] = useState('')
  const history = useHistory();
  let { entidad } = useParams();
  useEffect(()=>{    
    async function setData(token,url){        
        let response = await getByEntity(token, url);
        search ? setEntityData(response.data.docs) : setEntityData(response.data) 
    }    
    
    setData(token,`/${entidad}${search}`);
  },[search]);

  const entityHandler = (event) =>{
    const {value} = event.target
    setCategorySearch(value)
    history.push(`/search/${value}`)
    setData(token, `/${value}`)
  }

  async function setData(token,url){        
    let response = await getByEntity(token, url);
    setEntityData(response.data)
    console.log(response.data)
    console.log(entidad)
}    

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
            <div className="search-container" onChange={entityHandler}>
              <div className="search-header">
                <InputSearch
                  />
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
                  <button type="button" 
                    className="btn-search" 
                    onClick={entityHandler} 
                    value='graduates'>
                    Egresados
                  </button>
                  <button type="button" 
                    className="btn-search" 
                    onClick={entityHandler} 
                    value='universities'>
                    Univesidades
                  </button>
                  <button type="button" 
                    className="btn-search" 
                    onClick={entityHandler} 
                    value='companies'>
                    Empresas
                  </button>
                  <button type="button" 
                    className="btn-search" 
                    onClick={entityHandler} 
                    value='vacancies'>
                    Vacantes
                  </button>
                </aside>
                <div className='d-flex flex-column cards-tainer'>

                  { entityData && entityData.map((item) => {
                    return <CardUser 
                           entidad = {entidad}
                            key={item._id}
                          entityData= {item} 
                          />
                  })}

                  </div>
              </div>
            </div>
          )}
          {matches.large && (
            <div className="search-container">
              <div className="search-header">
                <div className="search-result">
                  <h3>Resultados: {search.slice(3,20)}</h3>
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
                    <button type="button" className="btn-search"
                      value='graduates'
                      onClick={entityHandler}>
                      Egresados
                    </button>
                    <button type="button" className="btn-search"
                      value='universities'
                      onClick={entityHandler}>
                      Univesidades
                    </button>
                    <button type="button" className="btn-search"
                      value='companies'
                      onClick={entityHandler}>
                      Empresas
                    </button>
                    <button type="button" className="btn-search"
                      value='vacancies'
                      onClick={entityHandler}>
                      Vacantes
                    </button>
                  </div>
                </aside>
                <div className='d-flex flex-column cards-tainer'>

                { entityData && entityData.map((item) => {
                  return <CardUser 
                     entidad = {entidad}
                          key={item._id}
                         entityData= {item} 
                         />
                })}
               
                </div>
                
               
              </div>
            </div>
          )}
        </Fragment>
      )}
    </Media>
  );
}
