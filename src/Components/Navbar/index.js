import React from "react";
import "./style.scss";

import {
    Navbar,
    NavbarBrand,
    NavItem,
    NavLink
  } from 'reactstrap';

export default function Navegacion(props){ 
        return(
            <Navbar color="faded" light>
                <NavbarBrand href="/" className="mr-auto">EGRESAPP</NavbarBrand>
                <NavItem>
                    <NavLink href="/">Home</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href="/login">Login</NavLink>
                </NavItem>
            </Navbar>
        );
};