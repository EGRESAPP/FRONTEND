import React, { useEffect, useState } from "react";
import "./style.scss";

//librerias
import swal from 'sweetalert';
import { Spinner } from 'reactstrap';

//icons
import { MdChevronRight,MdChevronLeft,MdFirstPage,MdLastPage } from "react-icons/md";

//servicios
import {createApplication,getEntity,getApplicationsByIdGradaute, deleteEntityById } from "../../Lib/api";

export default function Table(props) {
  const { titulo, columns,userLogged,section } = props;
  const [data,setData] = useState();
  const [size,setSize] = useState(10);
  const [page,setPage] = useState(1);
  const [totalPage,setTotalPage] = useState(0);
  const [totalSize,setTotalSize] = useState(0);
  const [hasNextPage,setHasNextPage] = useState(false);
  const [hasPrevPage,setHasPrevPage] = useState(false);
  
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect( async ()=>{

      if(section === "Vacantes"){
        getVacantesFiltradas()
      }

      if(section === "Egresados"){
        getEgresados(size,page);        
      }

      if(section === "Aplicaciones"){
        const applications = await getApplicationsGraduate();
        setData(applications);
        setSize(applications.length);
      }
      
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[section]);

  async function getApplicationsGraduate(){
    let response = await getApplicationsByIdGradaute(userLogged.token,`/Applications/graduate/${userLogged._id}`);
    return response.data.docs;
  }

  async function getVacancies(){
    let response = await getEntity(userLogged.token,"/vacancies?limit=10");
    return response.data.docs;
  }

  async function getEgresados(limit,page){
    let response = await getEntity(userLogged.token,`/graduates?limit=${limit}&page=${page}`);
    setData(response.data.docs);
    setSize(response.data.limit);
    setPage(response.data.page);
    setTotalSize(response.data.totalDocs);
    setTotalPage(response.data.totalPages);
    setHasPrevPage(response.data.hasPrevPage);
    setHasNextPage(response.data.hasNextPage);
  }

  async function getVacantesFiltradas(){
    
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
          <td>{data.description}</td>
          <td>{data.part_partime?"Medio Tiempo":"Tiempo Completo"}</td>
          <td><button type="button" className="btn-accion" data-vacancy={data._id} data-company-name={data.company.name} onClick={crearPostulacion}>Postularme</button></td>
        </tr>
      )
    });
  }

  function renderGraduates(data){
    return data.map((data,index)=>{          
      return (
        <tr key={index}>
          <td ><img className="avatar"src={data.avatar} alt="" /></td>
          <td>{`${data.name} ${data.lastName}`}</td>
          <td>{data.title}</td>
          <td>{data.description}</td>
          <td><button type="button" className="btn-accion" data-vacancy={data._id} >Ver</button></td>
        </tr>
      )
    });
  }

  function renderApplications(data){
    return data.map((data,index)=>{          
      return (
        <tr key={index}>
          <td>{data.vacancy.position}</td>
          <td>{data.company}</td>
          <td>{data.vacancy.city}</td>
          <td>{data.status}</td>
          <td><button type="button" className="btn-accion" data-application={data._id} onClick={eliminarPostulacion}>Cancelar</button></td>
        </tr>
      )
    });
  }

  const crearPostulacion = async (event) => {
    const name = event.target.getAttribute("data-company-name");
    const idVacancy = event.target.getAttribute("data-vacancy");
    const idGraduate = userLogged._id;

    const response = await createApplication(userLogged.token,`/Applications/`,{graduate:idGraduate,vacancy:idVacancy,company:name});
    if(response.success){
      getVacantesFiltradas();
      swal("Buena Suerte!", "Se ha realizado correctamente la postulacion", "success");
    }else{
      swal("ERROR!", response.message, "error");
    }
  }

  const eliminarPostulacion = async (event) => {
    const id = event.target.getAttribute("data-application");

    const response = await deleteEntityById(userLogged.token,`Applications`,id);
    if(response.success){
      const applications = await getApplicationsGraduate();
      setData(applications)
      setSize(applications.length);
      swal("No te rindas, Sigue buscando!", "Tu postulacion se ha cancelado", "warning");
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
            { 
              section === "Vacantes" && (data ? renderVacancies(data) : <Spinner className="spinner" style={{ width: '4rem', height: '4rem', }} />)
            }    
            { 
              section === "Aplicaciones" && (data ? renderApplications(data) : <Spinner className="spinner" style={{ width: '4rem', height: '4rem', }} />)
            }    
            { 
              section === "Egresados" && (data ? renderGraduates(data) : <Spinner className="spinner" style={{ width: '4rem', height: '4rem', }} />)
            }       
        </tbody>
      </table>
      <div className="pagination-container">
        <div className="resgisters">
        <span>{data ? `Pagina ${page}/${totalPage}` : `Pagina 1/1`}</span>  
        <select id="selectedRecords">
          <option value="10" selected>10 Registros</option>
          <option value="25">25 Registros</option>
          <option value="50">50 Registros</option>
        </select>
        <span>{data ? `Total de Registros: ${size}/${totalSize}` : `Total de Registros: 0`}</span>  
        </div>
        
        { data &&(
          
          <div className="pagination">
            <button type="button" id="firstPage" title="Primera Pagina" className={hasPrevPage?"btn-first":"btn-first-block"} value="1"><MdFirstPage size="35px"/></button>
            <button type="button" id="previousPage" title="Pagina Anterior" className={hasPrevPage?"btn-left":"btn-left-block"} disabled={`${hasPrevPage}`} value={page+1}><MdChevronLeft size="35px"/></button>
            <button type="button" id="nextPage" title="Pagina Siguiente" className={hasNextPage?"btn-right":"btn-right-block"} disabled={`${hasNextPage}`} value={page-1}><MdChevronRight size="35px"/></button>
            <button type="button" id="lastPage" title="Ultima Pagina" className={hasNextPage?"btn-last":"btn-last-block"} disabled={`${hasNextPage}`} value={totalPage}><MdLastPage size="35px"/></button>
          </div>
        )}        

      </div>
    </section>
  );
}
