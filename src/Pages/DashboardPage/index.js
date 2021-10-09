import React, { useState, useEffect } from "react";
import "./style.scss";

//service
import { getEntityById} from "../../Lib/api";

//libreria
import { useHistory } from "react-router";

//componentes
import MenuDashboard from "../../Components/Menus/Dashboard";
import Table from "../../Components/Table";
import EntityForm from "../../Components/EntityForm"

export default function DashboardPage(props) {
  const history = useHistory();
  const [userLogged,setUserLogged] = useState();
  const [section, setSection] = useState("Perfil");
  const [entity, setEntity] = useState("");

  useEffect(()=>{
    async function getEntity(){
      const userInfo = JSON.parse(localStorage.getItem("userData"));
      if(userInfo){
        setEntity(userInfo.entity)
        const response = await getEntityById(userInfo.token,`/${userInfo.entity}/${userInfo._id}`)
        if(response){
          response.data.entity = userInfo.entity          
          setUserLogged(response.data)
        }else{
          
        }
      }else{
        history.push("/")
      }
    }

    getEntity();
    
  },[]);


  const handlerSection = (event) => {
    const value = event.target.getAttribute("data-text")
    setSection(value)
  }

  const colEmpresa = [
    "Avatar",
    "Nombre",
    "Apellido",
    "Titulo",
    "Correo",
    "Ciudad",
    "Acciones",
  ];

  const colVacantes =[
    "Posición",
    "Empresa",
    "Ciudad",
    "Descripción",
    "Tipo de Empleo",
  ]

  return (
    <main className="dashboard-container">
      {
        userLogged && <MenuDashboard userLogged={userLogged} handlerSection={handlerSection}/>
      }
      
      {
        section === "Perfil" && 
            <EntityForm entity={entity}/>
        
      }
      {
        section === "Vacantes" && (
          <Table titulo="Vacantes" columns={colVacantes} userLogged={userLogged}/>
        )
      }
      {
        section === "Aplicaciones" && (
          <Table titulo="Mis Aplicaciones" columns={colVacantes} userLogged={userLogged}/>
        )
      }
      
      
    </main>
  );
}
