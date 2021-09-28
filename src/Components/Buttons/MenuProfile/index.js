import React from "react";
import "./style.scss";

import { useHistory } from "react-router-dom";

export default function MenuProfileButton(props) {
  const { text, page } = props;
  let history = useHistory();
  return (
      <button className="menu-profile-link" type="button" onClick={()=>history.push(page)}>{text}</button>
  );
}

