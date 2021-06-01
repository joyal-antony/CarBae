import React from 'react'
import nav from './Navbar.module.css'
import car from '../icons/car.svg'
import search from '../icons/search.svg'
import loc from '../icons/map.svg'
import { Link } from "react-router-dom";


function NavBar() {
  return (
    <nav >
      <img src={car} alt="logo"></img>
      <Link to='/'>
        <h2>CARBAE</h2>
      </Link>
      <div className={nav['nav-right']}>
        <img src={search} alt="search"></img>
        <img src={loc} alt="loc"></img>
      </div>
    </nav>
  )
}

export default NavBar
