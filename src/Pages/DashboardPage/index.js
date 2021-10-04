import React, { useState, useEffect } from "react";
import "./style.scss";

//service
import { getUsersByRole } from "../../Lib/api";

//componentes
import MenuDashboard from "../../Components/Menus/Dashboard";
import Table from "../../Components/Table";

export default function DashboardPage(props) {
  const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxNTRkOTkzMjVlNjU5N2VlM2NjYjg0YiIsImlhdCI6MTYzMjk1MDY5OSwiZXhwIjoxNjMzMDM3MDk5fQ.X6QazYrz6NBsj8mqC64AhPORzFyJx0TZotO-dET7Beo";
  const { userLogged } = props;

  const [userData, setUserData] = useState({});
  const [AlertVisible, setAlertVisible] = useState(false);
  const [error, setError] = useState("Error");

  const handleVisible = () => {
    setAlertVisible(true);
    setTimeout(() => {
      setAlertVisible(false);
    }, 3000);
  };

  useEffect(() => {
    async function getUsers(){
      try {
        const response = await getUsersByRole(token, "Egresado");
        if (response.succes === false) {
          handleVisible();
        } else {
          return setUserData(response.data);
        }
      } catch (error) {
        setError(error.message)
        handleVisible();
      }  
    }
    getUsers();
    
  }, []);

  const columns = [
    "Avatar",
    "Nombre",
    "Apellido",
    "Titulo",
    "Correo",
    "Ciudad",
    "Acciones",
  ];

  return (
    <main className="dashboard-container">
      <MenuDashboard userLogged={userLogged} />
      <Table titulo="Lista de Egresados" columns={columns} data={userData} />
      {AlertVisible && <div className="centrar">{error}</div>}
    </main>
  );
}
