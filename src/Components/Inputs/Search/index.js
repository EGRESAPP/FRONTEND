import React from "react";
import "./style.scss";

//iconos
import { MdSearch} from "react-icons/md";

export default function InputSearch(props) {
  return (
    <form className="container-search">
        <input className="input-search" type="text" name="search" placeholder="Search..."/>
        <button type="submit" className="button-search">
          <MdSearch size="30px" />
        </button>
      </form>
  );
}
