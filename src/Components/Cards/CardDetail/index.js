import React from "react";
import "./style.scss";

//iconos

export default function CardDetail(props) {

    const {cover,avatar,description, name, lastName, city, email} = props.userData
    console.log(props.userData)

    return(
       <div className='container-fluid'>
           <div className=" detail-card">
            <div className="card-header">
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
                    <div className='d-flex justify-content-between'>
                        <p>Nombre:</p>
                        <p className='font-weight-light'>{name}{' '}{lastName}</p>
                    </div>
                    <div className='d-flex justify-content-between'>
                        <p>Correo:</p>  
                        <p className='font-weight-light'>{email}</p>
                    </div>
                    <div className='d-flex justify-content-between'>
                        <p>Ciudad</p>
                        <p className='font-weight-light'>{city}</p>
                    </div>
                </div>
            </div>
            
             </div>

       
           
       </div>
       
    );

}