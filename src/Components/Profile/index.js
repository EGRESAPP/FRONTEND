import React from "react";
import "./style.scss";


export default function Profile(props) {
  const { entity } = props;
  return (

      entity === 'graduate' && (
        <h2>graduate</h2>
      )
    
  );
}
