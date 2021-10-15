import React from "react";
import "./style.scss";

//iconos

export default function CardDetail(props) {

    const {cover,avatar,description, name, lastName, city, webSite, email, title, company } = props.userData
    

    return(
       <div className='container-fluid'>
           <div className=" detail-card">
            { cover && <div className="card-header">
                <img className="card-cober" src={cover} alt="" />
                <img className="card-avatar profile-pic" src={avatar} alt="" />   
            </div>}
            { company && <div className="card-header">
                <img className="card-cober" src={company.cover} alt="" />
                <img className="card-avatar profile-pic" src={company.avatar} alt="" />   
            </div>}
            <div className='stats'>
                <div className="card-resume">
                    <h4>Resumen</h4>
                    <p>{description}</p>
                </div>
                <div className="card-detail">
                    <h4>Detalle</h4>
                    { company &&
                    <>  
                    <div className='d-flex justify-content-between'>
                        <p>Empresa:</p>
                        <p className='font-weight-light'>{company.name}</p>
                    </div>
                    <div className='d-flex justify-content-between'>
                        <p>Ciudad:</p>
                        <p className='font-weight-light'>{company.city}</p>
                    </div>
                    </>
                    }
                   { name && <div className='d-flex justify-content-between'>
                        <p>Nombre:</p>
                        <p className='font-weight-light'>{name}{' '}{lastName ? lastName : null}</p>
                    </div>}
                   { title && <div className='d-flex justify-content-between'>
                        <p>Título:</p>  
                        <p className='font-weight-light'>{title}</p>
                    </div> }
                   { webSite && <div className='d-flex justify-content-between'>
                        <p>Página web:</p>  
                        <p className='font-weight-light'>{webSite && webSite.substring(7,28)}</p>
                    </div>}
                    <div className='d-flex justify-content-between'>
                        <p>Ciudad:</p>
                        <p className='font-weight-light'>{city}</p>
                    </div>
                   {email && <div className='d-flex justify-content-between'>
                        <p>Correo:</p>
                        <p className='font-weight-light'>{email}</p>
                    </div> }
                </div>
            </div>
            
             </div>

       
           
       </div>
       
    );

}