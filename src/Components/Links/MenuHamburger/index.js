import React from "react";
import "./style.scss";

export default function MenuHamburgerLink(props) {
  const { text, page,icon } = props;
  return (
    <li className="menu-link">
      <a href={page} className="icon">
        <img src={icon}alt="" />
      </a>
      <span>{text}</span>
    </li>
  );
}
