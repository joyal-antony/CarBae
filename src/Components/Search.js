import React from 'react'
import { Link } from "react-router-dom";
import search from './Search.module.css'


function Search(props) {
  return (
    <div className={search.center}>
      <Link to={`/${props.location}`} className={search.search} >
        {props.icon && <img src={props.icon} alt={props.name} />}
        <p >{props.name}</p>
      </Link>
    </div>
  )
}

export default Search
