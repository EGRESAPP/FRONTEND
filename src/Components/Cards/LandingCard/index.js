import React from "react";
import "./style.scss";

//iconos

export default function CardUser(props) {

    const {cover,avatar,name,lastName,title,description} = props

    return(

        <div className="card-cont">
            <div className="card-head">
                <img className="card-cober" src={cover} alt="" />
                <img className="card-avatar" src={avatar} alt="" />   
            </div>
            <div className="card-body">
                <h5>{`${name} ${lastName}`}</h5>
                <h6>{title}</h6>
                <p>{description}</p>
            </div>
            <div className="card-foot">
                <button type="button" className="btn-foot">Mensaje</button>
                <button type="button" className="btn-foot">Ver</button>
            </div>
            
        </div>
    );

}