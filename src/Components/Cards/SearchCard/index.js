import React from "react";
import "./style.scss";

//iconos

export default function CardUser(props) {

    return(

        <div className="card-container">
            <img src="https://media.wired.com/photos/598e35fb99d76447c4eb1f28/master/pass/phonepicutres-TA.jpg" alt="" />
            <h5>Carlos Alcala</h5>
            <h6>Software Developer</h6>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sapiente, eveniet?</p>
            <button>Ver Detalle</button>
        </div>
    );

}