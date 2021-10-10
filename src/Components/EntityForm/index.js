import React,{useEffect, useState} from "react";
import { updateEntityById, uploadImage } from "../../Lib/api";
import "./style.scss";

//librerias
import swal from 'sweetalert';
import fs from 'fs';




export default function EntityForm(props) {
  const { userLogged ,entity, handlerUserLogged} = props;

  const [avatarImg,setAvatarImg]= useState({});
  const [coverImg,setCoverImg]= useState({});
  const [newInfo,setNewInfo]= useState({});

  const handlerAvatar = (event) => {
    event.preventDefault();
    setAvatarImg({file:URL.createObjectURL(event.target.files[0])})
  }

  const handlerCover = (event) => {
    event.preventDefault();
    setCoverImg({file:URL.createObjectURL(event.target.files[0])})
  }


  const handlerUpdate = async () => {
      if(newInfo.avatar){
        const response = await uploadImage(userLogged.token,`/${entity}/upload/avatar`, {avatar:newInfo.avatar,email:userLogged.email});
        swal(response.message)
          
      }else{
        swal("no existe el archivo")
          newInfo.avatar = userLogged.avatar
      }
      /*if(cover.exists()){
        const response = await uploadImage(userLogged.token,`/${entity}/upload/cover`, {cover,email:userLogged.email});
          swal(response.data)
          newInfo.cover = response.data.cover
      }else{
          newInfo.cover = userLogged.cover
      }*/
  }

  const getNewInfo = (event) => {
    event.preventDefault();
    const name = event.target.elements.name.value;
    const lastName = event.target.elements.lastName.value;
    const title = event.target.elements.title.value;
    const city = event.target.elements.city.value;
    const webSite = event.target.elements.city.value;
    const age = event.target.elements.city.value;
    const phone = event.target.elements.city.value;
    const description = event.target.elements.description.value;
    const avatar = event.target.elements.avatar.value
    const cover = event.target.elements.cover.value;

    const object = {name,lastName,title,city,webSite,age,phone,description,avatar,cover}

    setNewInfo(object);
    console.log(object)

    swal("Estas seguro de realizar estos cambios?", {
      buttons: ["Cancelar", true],
    }).then(respuesta=>{
      if(respuesta){
          handlerUpdate()
      }
    });
    
  }

  const handlerReset = () => {
    document.querySelector('#name').value = userLogged.name
    document.querySelector('#lastName').value = userLogged.lastName
    document.querySelector('#title').value = userLogged.title
    document.querySelector('#avatar').value = ""
    document.querySelector('#cover').value = ""
    document.querySelector('#city').value = userLogged.city
    document.querySelector('#webSite').value = userLogged.webSite
    document.querySelector('#age').value = userLogged.age
    document.querySelector('#phone').value = userLogged.phone
    document.querySelector('#description').value = userLogged.description
    if(userLogged.address)
      document.querySelector('#address').value = ""

  }

  return (          
        <section className="perfil-container">
          <h1>Perfil</h1>
          <p>Esta Informacion podra ser vista por otras personas, favor de tener cuidado que se comparte</p>
        <form className="form-perfil" onSubmit={getNewInfo}>
              
                {
                    entity === "Graduates" && (
                      <div className="form-rows">
                        <div class="form-inputs">
                          <input type="text" id="name" name="name" placeholder="Nombre" defaultValue={userLogged.name?userLogged.name:""} required />
                        </div>
                        <div class="form-inputs">
                          <input type="text" id="lastName" name="lastName" placeholder="Apellido" defaultValue={userLogged.lastName?userLogged.lastName:""} required/>
                        </div>
                      </div>
                    )
                }
                {
                    entity === "Companies" && (
                        <div class="form-inputs">
                          <input type="text" id="name" name="name" placeholder="Empresa" defaultValue={userLogged.name?userLogged.name:""} required />
                        </div>
                    )
                }
                {
                    entity === "Universities" && (
                        <div class="form-inputs">
                          <input type="text" id="name" name="name" placeholder="Universidad" defaultValue={userLogged.name?userLogged.name:""} required />
                        </div>
                    )
                }               
              <div className="form-img-container">
              <div className="form-avatar">
                  {
                      avatarImg.file ? (
                        <img src={avatarImg.file} alt="" title="Avatar"/>
                      ):(
                        <img src={userLogged.avatar} alt="" title="Avatar"/>
                      )
                  }
                  
                  <label for="avatar" className="btn-add">Modificar</label>
                  <input type="file" id="avatar" name="avatar" onChange={handlerAvatar}></input>                
              </div>    
              <div className="form-cover">
                  {
                      coverImg.file ? (
                        <img src={coverImg.file} alt="" title="Cover"/>
                      ):(
                        <img src={userLogged.cover} alt="" title="Cover"/>
                      )
                  }
                  
                  <label for="cover" className="btn-add">Modificar</label>
                  <input type="file" id="cover" name="cover" onChange={handlerCover}></input>                
              </div>
              </div>
              <div className="form-rows">
                <div className="w-50">
                  <div class="form-inputs">
                    <input type="text" id="title"name="title" placeholder="Titulo" defaultValue={userLogged.title?userLogged.title:""} />
                  </div>
                </div>
                <div className="w-50 d-flex">
                {
                    entity === "Graduates"  ? (
                      <div class="form-inputs">
                        <input type="text" id="city" name="city" placeholder="Ciudad" defaultValue={userLogged.city?userLogged.city:""}/>
                      </div>
                    ) : (
                      <>
                      <div class="form-inputs">
                        <input type="text" id="name"name="city" placeholder="Ciudad" defaultValue={userLogged.city?userLogged.city:""}/>
                      </div>
                      <div class="form-inputs">
                        <input type="text"  id="address" name="address" placeholder="Direccion" defaultValue={userLogged.address?userLogged.address:""}/>
                      </div>
                      </>
                    )
                }                 
                  
                </div>
              </div>
              <div className="form-rows">
                <div className="w-50">
                  <div class="form-inputs">
                    <input type="text" id="webSite" name="webSite" placeholder="Pagina de Internet" defaultValue={userLogged.webSite?userLogged.webSite:""}/>
                  </div>
                </div>
                <div className="w-50 d-flex">
                  <div class="form-inputs">
                    <input type="number" id="age" name="age" placeholder="Edad" defaultValue={userLogged.age?userLogged.age:""}/>
                  </div>
                  <div class="form-inputs">
                    <input type="number" id="phone" name="phone" placeholder="Telefono" defaultValue={userLogged.phone?userLogged.phone:""}/>
                  </div>
                </div>
              </div>               
             
              <div class="form-inputs">
                <textarea  id="description" name="description" placeholder="Descripcion" defaultValue={userLogged.description?userLogged.description:""}/>
              </div>              
              
              <div className="form-buttons">
                <button type="button" data-text="Perfil" onClick={handlerReset} className="btn-cancel">Cancel</button>
                <button type="submit" className="btn-save">Guardar</button>
              </div>
              
        </form>
        </section>
    
  );
}
