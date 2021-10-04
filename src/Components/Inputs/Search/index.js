import React,{useState} from "react";
import "./style.scss";

import { useHistory } from "react-router-dom";

//iconos
import { MdSearch} from "react-icons/md";

export default function InputSearch(props) {
  let history = useHistory();
  const [search,setSearch] =useState();

  function handlerChange(event){
    event.preventDefault()
    setSearch(event.target.value)
  }

  function handlerSubmit(event) {
    event.preventDefault()
    history.push(`/search?q=${search}`);
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
