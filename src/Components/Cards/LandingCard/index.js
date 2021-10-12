import React from "react";
import "./style.scss";

//iconos

export default function CardLanding(props) {

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
            
        </div>
    );

}