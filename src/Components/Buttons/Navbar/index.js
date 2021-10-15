import React from "react";
import "./style.scss";

import { useHistory } from "react-router-dom";

export default function NavbarButton(props){ 
    let history = useHistory();  
    const { icon,page } = props;
  
    return (
      <button type="button" className="nav-btn" onClick={()=>{history.push(page)}}>
          <img src={icon} alt=""/>
      </button>
    );
};