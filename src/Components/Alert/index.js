import React from "react";
import "./style.scss";


export default function CustomAlert(props) {
  const { clase,message } = props;

  return (

    <div className={clase}>{message}</div>
    
  );
}
