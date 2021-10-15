import React, { useEffect, useState } from "react";
import "./style.scss";

//librerias
import swal from 'sweetalert';
import { Spinner } from 'reactstrap';
import { useHistory } from "react-router";
import { Link } from "react-router-dom";


//icons
import { MdChevronRight,MdChevronLeft,MdFirstPage,MdLastPage,MdCheck,MdClose,MdRemoveRedEye } from "react-icons/md";

//servicios
import {
  createApplication,
  getEntity,
  getApplicationsByIdGradaute, 
  deleteEntityById,
  updateEntityById,
  getApplicationsByIdVacancy,
  getVacanciesByIdCompany } from "../../Lib/api";

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

      if(section === "Vacantes" && userLogged.entity==="Graduates"){
        getVacantesFiltradas()
      }

      if(section === "Egresados"){
        getEgresados(size,page);        
      }

      if(section === "Aplicaciones" && userLogged.entity==="Companies"){
        getApplicationsCompanies();  
      }     

      if(section === "Vacantes" && userLogged.entity==="Companies"){
        getVacanciesCompany()
      } 

      if(section === "Aplicaciones" && userLogged.entity==="Graduates"){
        const applications = await getApplicationsGraduate();
        setData(applications);
        setSize(applications.length);
      }
      
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[section,size,page]);

  const handlerSize = (event) => {
      setSize(event.target.value);
      setPage(1)
  }

  const handlerFirstPage = () => {
    setPage(1);
  }

  const handlerNextPage = (event) => {
    const newPage = parseInt(page) + 1
    setPage(newPage);
  }

  const handlerPreviusPage = (event) => {
    const newPage = page - 1
    setPage(newPage);
  }

  const handlerLastPage = (event) => {
    const newPage = totalPage
    setPage(newPage);
  }

  const handlerAceptar = (event) => {
    
    swal("Aceptar Candidato","Estas seguro de aceptar a este candidato?","info", {
      buttons: ["Cancelar", true],
    }).then( async (respuesta)=>{
      if(respuesta){
        const id = event.target.getAttribute("data-vacancy");
        await updateEntityById(userLogged.token,`/Applications/${id}`,{status: "Aceptado"})
        getApplicationsCompanies();
      }
      
    })
  }

  const handlerRechazar = (event) => {
    swal("Rechazar Candidato","Estas seguro de rechazar a este candidato?","error", {
      buttons: ["Cancelar", true],
    }).then(async (respuesta)=>{
      if(respuesta){
        const id = event.target.getAttribute("data-vacancy");
        await updateEntityById(userLogged.token,`/Applications/${id}`,{status: "Rechazado"})
        getApplicationsCompanies();
      }
    })
  }

  async function getApplicationsGraduate(){
    let response = await getApplicationsByIdGradaute(userLogged.token,`/Applications/graduate/${userLogged._id}`);
    return response.data.docs;
  }

  async function getApplicationsCompanies(){
    let listVacancies = await getVacanciesByIdCompany(userLogged.token,`/Vacancies/company/${userLogged._id}`);
    let listApplicationsPromises = listVacancies.data.docs.map((vacancy)=>{
          return getApplicationsByIdVacancy(userLogged.token,`/Applications/vacancy/${vacancy._id}`);
    });

    let listApplications = await Promise.all(listApplicationsPromises);

    let result = listApplications.reduce((acc,cur)=>{
      return [...acc,...cur.data.docs]
    },[])

    setData(result);
    setSize(result.length);
    setTotalSize(result.length)
    setTotalPage(1)
  }  

  async function getVacancies(){
    let response = await getEntity(userLogged.token,"/vacancies?limit=10");
    return response.data.docs;
  }

  async function getVacanciesCompany(){
    let response = await getApplicationsByIdVacancy(userLogged.token,`/vacancies/company/${userLogged._id}`);
    setData(response.data.docs);
    setSize(response.data.totalDocs);
    setPage(response.data.page);
    setTotalSize(response.data.totalDocs);
    setTotalPage(response.data.totalPages);
    setHasPrevPage(response.data.hasPrevPage);
    setHasNextPage(response.data.hasNextPage);
  }

  async function getEgresados(size,page){
    let response = await getEntity(userLogged.token,`/graduates?limit=${size}&page=${page}`);
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
    setData(results);
    setSize(results.length);
    setPage(1)
    setTotalSize(results.length);
    setTotalPage(1);
    setHasPrevPage(false);
    setHasNextPage(false);

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

  function renderVacanciesCompany(data){
    return data.map((data,index)=>{          
      return (
        <tr key={index}>
          <td>{data.position}</td>
          <td>{data.city}</td>
          <td>{data.description}</td>
          <td>{data.part_partime?"Medio Tiempo":"Tiempo Completo"}</td>
          <td><button type="button" className="btn-accion" value={data._id} onClick={eliminarVacancy}>Eliminar</button></td>
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
          <td><Link to={`/userDetail/graduates/${data._id}`} className="link-acciones-icons" target="_blank"><MdRemoveRedEye size="30px" title="Ver Detalle"/></Link></td>
        </tr>
      )
    });
  }

  function renderGraduatesApplication(data){
    return data.map((data,index)=>{          
      return (
        <tr key={index}>
          <td ><img className="avatar"src={data.graduate.avatar} alt="" /></td>
          <td>{`${data.graduate.name} ${data.graduate.lastName}`}</td>
          <td>{data.graduate.title}</td>
          <td>{data.graduate.description}</td>
          <td>{data.vacancy.position}</td>
          <td>{data.vacancy.city}</td>
          <td className="buttons-icons">
            <Link to={`/userDetail/graduates/${data.graduate._id}`} className="link-acciones-icons" target="_blank"><MdRemoveRedEye size="30px" title="Ver Detalle"/></Link>
            <button type="button" className="btn-acciones-icons" title="Aceptar"><MdCheck size="30px" data-vacancy={data._id}  onClick={handlerAceptar}/></button>
            <button type="button" className="btn-acciones-icons" title="Rechazar"><MdClose size="30px" data-vacancy={data._id} onClick={handlerRechazar}/></button>
          </td>
          
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

  const eliminarVacancy = async (event) => {
    const id = event.target.value
    const response = await deleteEntityById(userLogged.token,`Vacancies`,id);
    if(response.success){
      const applications = await getApplicationsGraduate();
      setData(applications)
      setSize(applications.length);
      swal("Eliminar Vacante!", "Estas seguro de eliminar esta vacante?", "warning");
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
              (section === "Vacantes" && userLogged.entity==="Graduates" ) && (data ? renderVacancies(data) : <Spinner className="spinner" style={{ width: '4rem', height: '4rem', }} />)
            }    
            { 
              (section === "Aplicaciones" && userLogged.entity==="Graduates") && (data ? renderApplications(data) : <Spinner className="spinner" style={{ width: '4rem', height: '4rem', }} />)
            }    
            { 
              section === "Egresados" && (data ? renderGraduates(data) : <Spinner className="spinner" style={{ width: '4rem', height: '4rem', }} />)
            }
            { 
              (section === "Aplicaciones" && userLogged.entity==="Companies") && (data ? renderGraduatesApplication(data) : <Spinner className="spinner" style={{ width: '4rem', height: '4rem', }} />)
            }    
            { 
              (section === "Vacantes" && userLogged.entity==="Companies") && (data ? renderVacanciesCompany(data) : <Spinner className="spinner" style={{ width: '4rem', height: '4rem', }} />)
            }     
        </tbody>
      </table>
      <div className="pagination-container">
        <div className="resgisters">
        <span>{data ? `Pagina ${page}/${totalPage}` : `Pagina 1/1`}</span>  
        <select onChange={handlerSize}>
          <option value="10" selected>10 Registros</option>
          <option value="25">25 Registros</option>
          <option value="50">50 Registros</option>
        </select>
        <span>{data ? `Total de Registros: ${size*page}/${totalSize}` : `Total de Registros: 0`}</span>  
        </div>
        
        { data &&(
          
          <div className="pagination">
            <button type="button" id="firstPage" title="Primera Pagina" className={hasPrevPage?"btn-first":"btn-first-block"} ><MdFirstPage size="35px" onClick={handlerFirstPage}/></button>
            <button type="button" id="previousPage" title="Pagina Anterior" className={hasPrevPage?"btn-left":"btn-left-block"} ><MdChevronLeft size="35px" onClick={handlerPreviusPage}/></button>
            <button type="button" id="nextPage" title="Pagina Siguiente" className={hasNextPage?"btn-right":"btn-right-block"}  ><MdChevronRight size="35px" onClick={handlerNextPage}/></button>
            <button type="button" id="lastPage" title="Ultima Pagina" className={hasNextPage?"btn-last":"btn-last-block"}  ><MdLastPage size="35px" onClick={handlerLastPage}/></button>
          </div>
        )}        

      </div>
    </section>
  );
}
