import React,{ useState} from "react";
import { updateEntityById, uploadImage } from "../../Lib/api";
import "./style.scss";

//librerias
import swal from 'sweetalert';

export default function EntityForm(props) {
  const { userLogged ,entity, handlerUserLogged} = props;

  const [avatarImg,setAvatarImg]= useState({});
  const [coverImg,setCoverImg]= useState({});

  const handlerAvatar = (event) => {
    event.preventDefault();
    setAvatarImg({file:URL.createObjectURL(event.target.files[0])})
  }

  const handlerCover = (event) => {
    event.preventDefault();
    setCoverImg({file:URL.createObjectURL(event.target.files[0])})
  }


  const handlerUpdate = async (event) => {
    event.preventDefault();
    const token = userLogged.token;
    const avatar = document.querySelector("#avatar").files[0];
    const cover = document.querySelector("#cover").files[0];

    let response;
    if(avatar){
      response = await uploadImage(token,`/${entity}/upload/avatar`, {avatar,email:userLogged.email});
      if(response.success){
        handlerUserLogged({...userLogged,avatar:response.data})
      }else{
        swal("ERROR!", response.message, "error");
      }
    }
    if(cover){
      response = await uploadImage(token,`/${entity}/upload/cover`, {cover,email:userLogged.email});
      if(response.success){
        handlerUserLogged({...userLogged,cover:response.data})
      }else{
        swal("ERROR!", response.message, "error");
      }
    }  

    const name = document.querySelector("#name").value;
    const lastName = document.querySelector("#lastName").value;
    const title = document.querySelector("#title").value;
    const city = document.querySelector("#city").value;
    const webSite = document.querySelector("#webSite").value;
    const age = document.querySelector("#age").value;
    const phone = document.querySelector("#phone").value;
    const description = document.querySelector("#description").value;

    let body;
    if(lastName)
      body = {name,lastName,title,city,webSite,age,phone,description}
    else
      body = {name,title,city,webSite,age,phone,description}

    swal("Actualizar Perfil","Estas seguro de realizar estos cambios?","info", {
      buttons: ["Cancelar", true],
    }).then(async (respuesta)=>{
      if(respuesta){    
          response = await updateEntityById(token,`/${entity}/${userLogged._id}`,body);

          if(response.success){
            handlerUserLogged({...response.data,entity,token});
            localStorage.setItem("userData",{...response.data,entity,token});
            handlerReset();
            swal("EXITO!", "Actualizacion correcta", "success");
          }else{
            swal("ERROR!", response.message, "error");
          }
      }
    });
  }  
    

  const handlerReset = (user) => {
    console.log(userLogged)
    document.querySelector('#name').value = user.name
    document.querySelector('#lastName').value = user.lastName
    document.querySelector('#title').value = user.title
    document.querySelector('#avatar').value = ""
    document.querySelector('#cover').value = ""
    document.querySelector('#city').value = user.city
    document.querySelector('#webSite').value = user.webSite
    document.querySelector('#age').value = user.age
    document.querySelector('#phone').value = user.phone
    document.querySelector('#description').value = user.description
    if(user.address)
      document.querySelector('#address').value = user.address

  }

  return (          
        <section className="perfil-container">
          <h1>Perfil</h1>
          <p>Esta Informacion podra ser vista por otras personas, favor de tener cuidado que se comparte</p>
        <form className="form-perfil">
              
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
                <button type="button" className="btn-save" onClick={handlerUpdate}>Guardar</button>
              </div>
              
        </form>
        </section>
    
  );
}
