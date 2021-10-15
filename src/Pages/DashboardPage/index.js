import React, { useState, useEffect } from "react";
import "./style.scss";

//service
import { getEntityById} from "../../Lib/api";

//librerias
import swal from 'sweetalert';
import { useHistory } from "react-router";

//componentes
import MenuDashboard from "../../Components/Menus/Dashboard";
import Table from "../../Components/Table";
import EntityForm from "../../Components/EntityForm";

export default function DashboardPage(props) {
  const history = useHistory();
  const [userLogged,setUserLogged] = useState({});
  const [section, setSection] = useState("Perfil");
  const [entity, setEntity] = useState("");

  useEffect(()=>{
    async function getEntity(){
      const userInfo = JSON.parse(localStorage.getItem("userData"));
      
      if(userInfo){
        setEntity(userInfo.entity);
        const response = await getEntityById(userInfo.token,userInfo.entity,userInfo._id);
        if(response.success){                 
          setUserLogged({...response.data,entity:userInfo.entity,token:userInfo.token})
        }else{
          swal("ERROR!", response.message, "error");
        }
      }else{
        history.push("/")
      }
    }

    getEntity();
    
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[]);


  const handlerSection = (event) => {
    const value = event.target.getAttribute("data-text")
    setSection(value)
  }

  const colAplicaciones= [
    "Posición",
    "Empresa",
    "Ciudad",
    "Estatus",
    "Acciones",
  ];

  const colVacantes =[
    "Posición",
    "Empresa",
    "Ciudad",
    "Descripción",
    "Tipo de Empleo",
    "Acciones",
  ]

  const colEgresados =[
    "Avatar",
    "Nombre",
    "Titulo",
    "Descripción",
    "Acciones",
  ]

  const colAplicacioneEmpresas =[
    "Avatar",
    "Nombre",
    "Titulo",
    "Descripción",
    "Posición",
    "Ciudad",
    "Acciones",
  ]

  const colVacantesEmpresas =[
    "Posición",
    "Ciudad",
    "Descripción",
    "Tipo de Empleo",
    "Acciones",
  ]

  return (
    <main className="dashboard-container">
      {
        userLogged && <MenuDashboard userLogged={userLogged} handlerSection={handlerSection}/>
      }
      
      {
        section === "Perfil" && 
            <EntityForm entity={entity} userLogged={userLogged} handlerUserLogged={setUserLogged}/>
        
      }
      {
        (section === "Vacantes" && entity ==="Graduates") && (
          <Table titulo="Vacantes" columns={colVacantes} userLogged={userLogged} section={section}/>
        )
      }
      {
        section === "Egresados" && (
          <Table titulo="Egresados" columns={colEgresados} userLogged={userLogged} section={section}/>
        )
      }
      {
        (section === "Aplicaciones" && entity==="Graduates") && (
          <Table titulo="Mis Aplicaciones" columns={colAplicaciones} userLogged={userLogged} section={section}/>
        )
      }
      {
        (section === "Aplicaciones" && entity ==="Companies") && (
          <Table titulo="Aplicaciones Recibidas" columns={colAplicacioneEmpresas} userLogged={userLogged} section={section}/>
        )
      }
      {
        (section === "Vacantes" && entity ==="Companies") && (
          <Table titulo="Vacantes Publicadas" columns={colVacantesEmpresas} userLogged={userLogged} section={section}/>
        )
      }
      
      
    </main>
  );
}
