import React from "react";
import "./style.scss";

export default function MenuProfileButton(props) {
  const { text, handlerLogged } = props;
  return (
      <button className="menu-profile-link" type="button" onClick={handlerLogged}>{text}</button>
  );
}
