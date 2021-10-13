import React, { useEffect, useState } from "react";
import "./style.scss";

//libraries
import swal from 'sweetalert';
import { Spinner } from 'reactstrap';

//icons
import { MdChevronRight,MdChevronLeft,MdFirstPage,MdLastPage } from "react-icons/md";

//services
import {createApplication,getEntity,getApplicationsByIdGradaute,getEntityById } from "../../Lib/api";

export default function Table(props) {
  const { titulo, columns,userLogged,section } = props;
  const [data,setData] = useState();
  const [size,setSize] = useState(1);
  
  useEffect(()=>{

      if(section === "Vacantes"){
        getData()
      }

      if(section === "Aplicaciones"){
        const applications = getApplicationsGraduate();
        setData(applications)
      }
      
  },[section]);

  async function getApplicationsGraduate(){
    let response = await getApplicationsByIdGradaute(userLogged.token,`/applications/graduate/${userLogged._id}`);
    return response.data.docs;
  }

  async function getVacancies(){
    let response = await getEntity(userLogged.token,"/vacancies");
    return response.data;
  }

  async function getData(){
    
    const vacancies = await getVacancies();
    const applications = await getApplicationsGraduate();
    
    const results = vacancies.filter(({ _id }) => !applications.some(({vacancy}) => _id === vacancy._id ));
    setSize(results.length);
    setData(results);

  }

  function renderVacancies(data){
    return data.map((data,index)=>{          
      return (
        <tr key={index}>
          <td>{data.position}</td>
          <td>{data.company.name}</td>
          <td>{data.city}</td>
          <td>{data.part_partime?"Medio Tiempo":"Tiempo Completo"}</td>
          <td>{data.description}</td>
          <td><button type="button" className="btn-accion" data-vacancy={data._id} onClick={handlerPostular}>Postularme</button></td>
        </tr>
      )
    });
  }

  function renderApplications(data){
    return data.map((data,index)=>{          
      return (
        <tr key={index}>
          <td>{data.position}</td>
          <td>{data.company.name}</td>
          <td>{data.city}</td>
          <td>{data.part_partime?"Medio Tiempo":"Tiempo Completo"}</td>
          <td>{data.description}</td>
          <td><button type="button" className="btn-accion" data-vacancy={data._id} onClick={handlerPostular}>Postularme</button></td>
        </tr>
      )
    });
  }



  const handlerPostular = async (event) => {
    const idVacancy = event.target.getAttribute("data-vacancy");
    const idGraduate = userLogged._id;

    const response = await createApplication(userLogged.token,`/Applications/`,{graduate:idGraduate,vacancy:idVacancy});
    if(response.success){
      getData();
      swal("Buena Suerte!", "Se ha realizado correctamente la postulacion", "success");
    }else{
      swal("ERROR!", response.message, "error");
    }
  }
  
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
            {!size && (<div className="results-records">No hay Resultados que mostrar</div>)}
            {data ? renderVacancies(data) : <Spinner className="spinner" style={{ width: '4rem', height: '4rem', }} />
            }             
        </tbody>
      </table>
      <div className="pagination-container">
        <div className="resgisters">
        <span>{data ? `Pagina 1/1` : `Pagina 0/0`}</span>  
        <select id="selectedRecords">
          <option value="10" selected>10 Registros</option>
          <option value="25">25 Registros</option>
          <option value="50">50 Registros</option>
        </select>
        <span>{data ? `Total de Registros: ${size}/${size}` : `Total de Registros: 0`}</span>  
        </div>
        
        { data &&(
          
          <div className="pagination">
            <button type="button" id="firstPage" title="Primera Pagina" className="btn-first" disabled={`${data.hasPrevPage}`} value="1"><MdFirstPage size="35px"/></button>
            <button type="button" id="previousPage" title="Pagina Anterior" className="btn-left" disabled={`${data.hasPrevPage}`} value={data.prevPage}><MdChevronLeft size="35px"/></button>
            <button type="button" id="nextPage" title="Pagina Siguiente" className="btn-right" disabled={`${data.hasNextPage}`} value={data.nextPage}><MdChevronRight size="35px"/></button>
            <button type="button" id="lastPage" title="Ultima Pagina" className="btn-last" disabled={`${data.hasNextPage}`} value={data.totalPages}><MdLastPage size="35px"/></button>
          </div>
        )}        

      </div>
    </section>
  );
}
