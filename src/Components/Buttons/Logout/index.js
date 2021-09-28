import React from "react";
import "./style.scss";

export default function LogoutButton(props) {
  const { text, handlerLogged } = props;
  return (
      <button className="menu-profile-link" type="button" onClick={handlerLogged}>{text}</button>
  );
}
