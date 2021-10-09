import React from "react";
import "./style.scss";

export default function LogoutLink(props) {
  const { text,handlerLogOut} = props;
  return (
    <a href="/" onClick={handlerLogOut} className="menu-profile-link">{text}</a>
  );
}

