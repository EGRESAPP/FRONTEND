import React,{useState} from "react";
import "./style.scss";

import { useHistory } from "react-router-dom";
import { useLocation } from 'react-router';

//iconos
import { MdSearch} from "react-icons/md";

export default function InputSearch(props) {

  let history = useHistory();
  const {entidad} = props
  const [search,setSearch] =useState();

  function handlerChange(event){
    event.preventDefault()
    console.log(event.target.value)
    setSearch(event.target.value)
  }

  function handlerSubmit(event) {
    event.preventDefault()
    console.log(search)
    const value = search ? `/search/${entidad}?q=${search}` : `/search/${entidad}`
    console.log(entidad)
    history.push(value) 
  }
  return (
    <form className="container-search" onSubmit={handlerSubmit}>
        <input className="input-search" type="text" name="search" placeholder="Search..." onChange={handlerChange}/>
        <button type="submit" className="button-search">
          <MdSearch size="30px" />
        </button>
      </form>
  );
}
