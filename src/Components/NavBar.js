import React from 'react'
import nav from './Navbar.module.css'
import car from '../icons/car.svg'
import search from '../icons/search.svg'
import loc from '../icons/map.svg'


function NavBar() {
  return (
    <nav >
      <div className={nav.logo}>

        <img src={car} alt="logo"></img>
        <h2>CARBAE</h2>
      </div>
      <div className={nav['nav-right']}>
        <img src={loc} alt="loc"></img>
        <img src={search} alt="search"></img>
      </div>
    </nav>
  )
}

export default NavBar
