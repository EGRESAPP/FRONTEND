import React from "react";
import "./style.scss";

export default function MenuProfileLink(props) {
  const { text, page } = props;
  return (
    <a href={page} className="menu-profile-link">{text}</a>
  );
}

