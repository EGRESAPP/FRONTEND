import React from "react";
import "./style.scss"

import { useHistory } from "react-router";

import NoFound from "../../Assets/Images/404.png"

export default function SearchPage(props) {
    const history = useHistory();
    return(
        <div className="error-page">
            <button className="error-button" onClick={()=>{history.push("/")}}>Go Home</button>
            <img src={NoFound} alt="" />
        </div>
        
        
    )

}