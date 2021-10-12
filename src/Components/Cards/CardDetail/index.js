import React from "react";
import "./style.scss";

//iconos

export default function CardDetail(props) {

    const {cover,avatar,name,lastName,title,description} = props.userData

    return(
       <div className='container-fluid'>
           <div className=" detail-card">
            <div className="card-head card-header">
                <img className="card-cober" src={cover} alt="" />
                <img className="card-avatar profile-pic" src={avatar} alt="" />   
            </div>
            <div className=' stats'>
                <div className="card-resume">
                    <h4>Resumen</h4>
                    <p>{description}</p>
                </div>
                <div className="card-detail">
                    <h4>Detalle</h4>
                    <h5>{'Nombre      '}</h5>
                    <h5>{'Sitio web      '}</h5>
                    <h5>{'Sector      '}</h5>
                </div>
            </div>
            
             </div>

       
           
       </div>
       
    );

}