import React, { useState,useEffect } from "react";
import { isExpired } from "react-jwt";
import "./App.scss";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
//paginas
import LandingPage from "./Pages/LandingPage";
import LoginPage from "./Pages/LoginPage";
import RegisterPage from "./Pages/RegisterPage";
import DashboardPage from "./Pages/DashboardPage";
import SearchPage from "./Pages/SearchPage";
import ErrorPage from "./Pages/ErrorPage"

//componentes
import Navegacion from "./Components/Navbar";
import Footer from "./Components/Footer";
import DetailUserPage from "./Pages/Detail/UserPage";

export default function App() {
  const [userLogged, setUserLogged] = useState({});
  const [isLogged, setIsLogged] = useState(false);

  useEffect(() => {
    const userInfo = JSON.parse(localStorage.getItem("userData"));
    if (userInfo) {
      const expired = isExpired(userInfo.token);
      if (!expired) {
        setUserLogged(userInfo);
        setIsLogged(true);
      } else {
        localStorage.removeItem("userData");
      }
    }
  }, []);

  const handlerLogOut = () => {    
      localStorage.removeItem("userData");    
  }

  return (
      <Router>
        <Switch>
          <Route  path="/userDetail/:id">
            <DetailUserPage userLogged={userLogged}/>
          </Route>
          <Route exact path="/login">
            <LoginPage handlerIsLogged={setIsLogged} handlerUserLogged={setUserLogged}/>
          </Route>
          <Route exact path="/register">
            <RegisterPage handlerIsLogged={setIsLogged} handlerUserLogged={setUserLogged}/>
          </Route>
          <Route exact path="/dashboard">
            <Navegacion isLogged={isLogged} handlerLogOut={handlerLogOut} userLogged={userLogged}/>
            <DashboardPage/>
            <Footer />
          </Route>
          <Route exact path="/search/:entidad">
            <Navegacion isLogged={isLogged} handlerLogOut={handlerLogOut} userLogged={userLogged}/>
            <SearchPage token={userLogged} />
            <Footer />
          </Route>
          <Route exact path="/">
            <Navegacion isLogged={isLogged} handlerLogOut={handlerLogOut} userLogged={userLogged}/>
            <LandingPage />
            <Footer />
          </Route>
          <Route path="*">
            <ErrorPage/>
          </Route>
        </Switch>
      </Router>
  );
}
