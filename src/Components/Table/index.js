import React, { useEffect, useState } from "react";
import "./style.scss";

import { MdChevronRight,MdChevronLeft,MdFirstPage,MdLastPage } from "react-icons/md";
import { getCompanies } from "../../Lib/api";

export default function Table(props) {
  const { titulo, columns,userLogged } = props;
  const [data,setData] = useState()

  /*useEffect(()=>{
      async function getEmpresas(){
        let response = await getCompanies(userLogged.token,"/companies");
        console.log(response.data)
        setData(data)
      }
      getEmpresas();
  },[]);*/

  
  return (
    <section className="table-container" >
      <h2 className="table-title">{titulo}</h2>
      <table class="content-table">
        <thead className="table-header">
          <tr>
            {columns.map((col,index) => {
              return <th scope="col" key={index}>{col}</th>;
            })}
          </tr>
        </thead>
        <tbody className="table-body">
            {/*data.users&&data.users.map((user,index)=>{          
              return (
                <tr key={index}>
                  <td><img src={user.avatar}  className="avatar" alt="" /></td>
                  <td>{user.name}</td>
                  <td>{user.lastName}</td>
                  <td>{user.title}</td>
                  <td>{user.email}</td>
                  <td>{user.city}</td>
                  <td><button type="button" className="btn-accion">Ver</button></td>
                </tr>
              )
            })*/}             
        </tbody>
      </table>
      <div className="pagination-container">
        <div className="resgisters">
        <span>{`Pagina ${1}/${1}`}</span>  
        <select>
          <option value="10">10 Registros</option>
          <option value="25">25 Registros</option>
          <option value="50">50 Registros</option>
        </select>
        </div>
        <div className="pagination">
          <button type="button" title="Primera Pagina" className="btn-first"><MdFirstPage size="35px"/></button>
          <button type="button" title="Pagina Anterior" className="btn-left"><MdChevronLeft size="35px"/></button>
          <button type="button" title="Pagina Siguiente" className="btn-right"><MdChevronRight size="35px"/></button>
          <button type="button" title="Ultima Pagina" className="btn-last"><MdLastPage size="35px"/></button>
        </div>
        

      </div>
    </section>
  );
}
