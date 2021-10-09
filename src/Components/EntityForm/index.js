import React from "react";
import "./style.scss";


export default function GraduateForm(props) {
  const { entity } = props;
  return (    
      entity === "Graduates" && (
        <section className="perfil-container">
        <form className="form-perfil">
            <div class="form-input">
                <input type="text" name="name" placeholder="Nombre" required />
              </div>
              <div class="form-input">
                <input type="text"name="lastName" placeholder="Apellido" required/>
              </div>
              <div class="form-input">
                <input type="text"name="title" placeholder="Titulo" required/>
              </div>
              <div class="form-input">
                <input type="text"name="city" placeholder="Direccion" required/>
              </div>
              <div class="form-input">
                <input type="Number" name="phone" placeholder="Telefono" required/>
              </div>
              <div class="form-input">
                <textarea name="description" placeholder="Descripcion" required/>
              </div>
              <div class="form-input">
                <input type="text" name="webSite" placeholder="Pagina de Internet" required/>
              </div>
              <div class="form-input">
                <input type="text" name="age" placeholder="Edad" required/>
              </div>
        </form>
        </section>
      )
    
    
  );
}
