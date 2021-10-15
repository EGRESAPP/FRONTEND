import React from "react";
import { Link } from "react-router-dom";
import "./style.scss";

//iconos

export default function CardUser(props) {
    const {name, lastName, title, avatar, description, _id, position} = props.entityData
    const { entidad } = props

    return(

        <div className="card-container search-card">
           
            {avatar && < img src={avatar} alt="" />}
            <h5>{name}{' '}{lastName}</h5>
            {position && <h5 className='mt-2'>{position}</h5>}
            <h6>{title}</h6>
            <p>{description}</p>
            <Link to={`/userDetail/${entidad}/${_id}`}>
              Ver Detalle
            </Link>
        </div>
    );
}