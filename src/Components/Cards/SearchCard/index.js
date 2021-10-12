import React from "react";
import { Link } from "react-router-dom";
import "./style.scss";

//iconos

export default function CardUser(props) {
    const {name, lastName, title, avatar, description, _id} = props.entityData

    return(

        <div className="card-container">
            <img src={avatar} alt="" />
            <h5>{name}{lastName}</h5>
            <h6>{title}</h6>
            <p>{description}</p>
            <Link to={`/userDetail/${_id}`}>
              Ver Detalle
            </Link>
        </div>
    );

}