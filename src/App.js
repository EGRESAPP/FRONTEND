import React, { useState, useEffect } from "react";
import "./App.scss";

import { BrowserRouter as Router, Switch, Route} from "react-router-dom";

//paginas
import LandingPage from "./Pages/LandingPage";
import LoginPage from "./Pages/LoginPage";
import RegisterPage from "./Pages/RegisterPage";
import SettingsPage from "./Pages/SettingsPage";
import DashboardPage from "./Pages/DashboardPage";

//componentes
import Navegacion from "./Components/Navbar";
import Footer from "./Components/Footer"

export default function App() {

  const [isLogged,setIsLogged] = useState(true);

  //usuario dumy
  const user= {
    name:"Carlos",
    lastName:"Alcala",
    email:"calcala@gmail.com",
    picture:"https://i.blogs.es/66b2a4/photo-1511367461989-f85a21fda167/1366_2000.jpeg",
    role:"Egresado"
  }

  const handlerLogged = () => {
      setIsLogged(!isLogged)
  }

  return (
    <Router>
      {/*navbar*/}
        <Navegacion isLogged={isLogged} handlerLogged={handlerLogged}/> 
      {/*paginas*/}
        <Switch>
          <Route path="/login">
            <LoginPage/>
          </Route>
          <Route path="/register">
            <RegisterPage/>
          </Route>
          <Route path="/settings">
            <SettingsPage/>
          </Route>
          <Route path="/dashboard">
            <DashboardPage userLogged={user}/>
          </Route>
          <Route path="/">
            <LandingPage />
          </Route>
        </Switch>
        {/*footer*/}
        <Footer/>
    </Router>
  );
}
