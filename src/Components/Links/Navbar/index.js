import React from "react";
import "./style.scss";

export default function NavbarLink(props) {
  const { text, page } = props;
  return (
    <li className="">
      <a className="" href={page}>
        {text}
      </a>
    </li>
  );
}
