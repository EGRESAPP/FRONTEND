import React, { useState, useEffect } from "react";
import "./App.scss";

import { BrowserRouter as Router, Switch, Route} from "react-router-dom";

//paginas
import LandingPage from "./Pages/LandingPage";
import LoginPage from "./Pages/LoginPage";
import RegisterPage from "./Pages/RegisterPage";

//componentes
import Navegacion from "./Components/Navbar";

export default function App() {

  const [isLogged,setIsLogged] = useState(true);

  return (
    <Router>
      {/*navbar*/}
        <Navegacion isLogged={isLogged}/> 
      {/*paginas*/}
        <Switch>
          <Route path="/login">
            <LoginPage/>
          </Route>
          <Route path="/register">
            <RegisterPage/>
          </Route>
          <Route path="/">
            <LandingPage />
          </Route>
        </Switch>
    </Router>
  );
}
