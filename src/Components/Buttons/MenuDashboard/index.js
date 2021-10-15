import React from "react";
import "./style.scss";

export default function MenuDashboardButton(props) {
  const { icon, text,handlerSection } = props;
  return (
      <button className="btn-dashboard" data-text={text} onClick={handlerSection}>
        <img src={icon} alt="" title={text} data-text={text} onClick={handlerSection}/>
        <span data-text={text} onClick={handlerSection}>{text}</span>
      </button>
  );
}
