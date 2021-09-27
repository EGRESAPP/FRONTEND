import React from "react";
import "./style.scss";

export default function NavbarLink(props) {
  const { text, page } = props;
  return (
    <li className="navbar-link">
      <a href={page}>
        {text}
      </a>
    </li>
  );
}
