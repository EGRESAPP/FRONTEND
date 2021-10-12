import React, { useEffect, useState } from "react";
import "./style.scss";

import { MdChevronRight,MdChevronLeft,MdFirstPage,MdLastPage } from "react-icons/md";
import {getEntity } from "../../Lib/api";

export default function Table(props) {
  const { titulo, columns,userLogged,section } = props;
  const [data,setData] = useState({});

  useEffect(()=>{

      if(section === "Vacantes"){
        async function getData(){
          let response = await getEntity(userLogged.token,"/vacancies?limit=10&page=1");
          console.log(response.data)
          setData(response.data)
        }
        getData();
      }

      if(section === "Aplicaciones"){
        async function getData(){
          let response = await getEntity(userLogged.token,"/applications?limit=10&page=1");
          setData(response.data)
        }
        getData();
      }
      
  },[]);

  /*const handlerSelectedRecord = async (event) => {
    const value = event.target.value;
    setNumberRecord(value)
    console.log(value)
    let response = await getEntity(userLogged.token,`/applications?limit=${value}&page=1`);

  }*/

  
  return (
    <section className="table-container" >
      <h2 className="table-title">{titulo}</h2>
      <table class="content-table">
        <thead className="table-header">
          <tr>
            {columns.map((col,index) => {
              return <th scope="col" key={index}>{col}</th>;
            })}
          </tr>
        </thead>
        <tbody className="table-body">
            {data.docs ? data.docs.map((data,index)=>{          
              return (
                <tr key={index}>
                  <td>{data.position}</td>
                  <td>{data.company.name}</td>
                  <td>{data.city}</td>
                  <td>{data.part_partime?"Medio Tiempo":"Tiempo Completo"}</td>
                  <td>{data.description}</td>
                  <td><button type="button" className="btn-accion">Postularme</button></td>
                </tr>
              )
            }) : (<div>Loading...</div>)
          }             
        </tbody>
      </table>
      <div className="pagination-container">
        <div className="resgisters">
        <span>{data ? `Pagina ${data.page}/${data.totalPages}` : `Pagina 0/0`}</span>  
        <select id="selectedRecords">
          <option value="10" selected>10 Registros</option>
          <option value="25">25 Registros</option>
          <option value="50">50 Registros</option>
        </select>
        </div>
        
        { data &&(
          <div className="pagination">
            <button type="button" id="firstPage" title="Primera Pagina" className="btn-first" disabled={data.hasPrevPage} value="1"><MdFirstPage size="35px"/></button>
            <button type="button" id="previousPage" title="Pagina Anterior" className="btn-left" disabled={data.hasPrevPage} value={data.prevPage}><MdChevronLeft size="35px"/></button>
            <button type="button" id="nextPage" title="Pagina Siguiente" className="btn-right" disabled={data.hasNextPage} value={data.nextPage}><MdChevronRight size="35px"/></button>
            <button type="button" id="lastPage" title="Ultima Pagina" className="btn-last" disabled={data.hasNextPage} value={data.totalPages}><MdLastPage size="35px"/></button>
          </div>
        )}        

      </div>
    </section>
  );
}
