import React, { useState, useEffect } from "react";
import "./App.scss";

import { BrowserRouter as Router, Switch, Route} from "react-router-dom";

//paginas
import LandingPage from "./Pages/LandingPage";
import LoginPage from "./Pages/LoginPage";
import RegisterPage from "./Pages/RegisterPage";
import SettingsPage from "./Pages/SettingsPage";
import DashboardPage from "./Pages/Dashboard";

//componentes
import Navegacion from "./Components/Navbar";

export default function App() {

  const [isLogged,setIsLogged] = useState(true);

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
            <DashboardPage/>
          </Route>
          <Route path="/">
            <LandingPage />
          </Route>
        </Switch>
    </Router>
  );
}
