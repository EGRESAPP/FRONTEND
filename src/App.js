import React, { useState } from "react";
import "./App.scss";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
//paginas
import LandingPage from "./Pages/LandingPage";
import LoginPage from "./Pages/LoginPage";
import RegisterPage from "./Pages/RegisterPage";
import SettingsPage from "./Pages/SettingsPage";
import DashboardPage from "./Pages/DashboardPage";
import SearchPage from "./Pages/SearchPage";

//componentes
import Navegacion from "./Components/Navbar";
import Footer from "./Components/Footer";

export default function App() {
  const [isLogged, setIsLogged] = useState(true);
  const token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxNTRkOTkzMjVlNjU5N2VlM2NjYjg0YiIsImlhdCI6MTYzMzEyMDI4NCwiZXhwIjoxNjMzMjA2Njg0fQ.qDmUHvLs1lK6a6qOxcqRqbpJMfU1w9x5MGjCvpfb0Vc";

  //usuario dumy
  const user = {
    name: "Carlos",
    lastName: "Alcala",
    email: "calcala@gmail.com",
    picture:
      "https://i.blogs.es/66b2a4/photo-1511367461989-f85a21fda167/1366_2000.jpeg",
    role: "Egresado",
  };

  const handlerLogged = () => {
    setIsLogged(!isLogged);
  };

  return (
      <Router>
        <Switch>
          <Route path="/login">
            <LoginPage />
          </Route>
          <Route path="/register">
            <RegisterPage />
          </Route>
          <Route path="/settings">
            <Navegacion isLogged={isLogged} handlerLogged={handlerLogged} />
            <SettingsPage />
            <Footer />
          </Route>
          <Route path="/dashboard">
            <Navegacion isLogged={isLogged} handlerLogged={handlerLogged} />
            <DashboardPage userLogged={user} />
            <Footer />
          </Route>
          <Route path="/search">
            <Navegacion isLogged={isLogged} handlerLogged={handlerLogged} />
            <SearchPage token={token} />
            <Footer />
          </Route>
          <Route path="/">
            <Navegacion isLogged={isLogged} handlerLogged={handlerLogged} />
            <LandingPage />
            <Footer />
          </Route>
        </Switch>
      </Router>
  );
}
