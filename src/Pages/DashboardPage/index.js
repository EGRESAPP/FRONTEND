import React from "react";
import "./style.scss";

//componentes
import MenuDashboard from "../../Components/Menus/Dashboard";

export default function DashboardPage(props){ 
      const {userLogged}=props;
        return(
              <main className="dashboard-container">
                  <MenuDashboard userLogged={userLogged}/>
                  <section>
                        <h1>dashboard</h1>
                  </section>
              </main> 
               
        );
};