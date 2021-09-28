import React from "react";
import "./style.scss";

export default function MenuDashboardButton(props) {
  const { icon, text } = props;
  return (
      <button className="btn-dashboard">
        <img src={icon} alt={text} title={text} />
        <span>{text}</span>
      </button>
  );
}
