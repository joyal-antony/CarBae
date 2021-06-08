import React from 'react'
import search from './Search.module.css'


function Search(props) {
  return (
    <div className={search.center}>
      <div onClick={props.click} className={search.search} >
        {props.icon && <img src={props.icon} alt={props.name} />}
        <p >{props.name}</p>
      </div>
    </div>
  )
}

export default Search
