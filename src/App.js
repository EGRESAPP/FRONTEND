import React, { useState, useEffect } from "react";
import "./App.scss";

import { BrowserRouter as Router, Switch, Route} from "react-router-dom";

//paginas
import LandingPage from "./Pages/LandingPage";
import LoginPage from "./Pages/LoginPage";

//componentes
import Navegacion from "./Components/Navbar";

export default function App() {
  return (
    <Router>
      {/*navbar*/}
        <Navegacion/> 
      {/*paginas*/}
        <Switch>
          <Route path="/login">
            <LoginPage/>
          </Route>
          <Route path="/">
            <LandingPage />
          </Route>
        </Switch>
    </Router>
  );
}
