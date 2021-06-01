import React from 'react'
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import FilterCars from './FilterCars'
import button from './Search.module.css'
import container from './Car.module.css'


import filter from './Filter.module.css'
import close from '../icons/close.svg'
import suv from '../icons/suv.svg'
import dropdown from '../icons/dropdown.svg'
import hatchback from '../icons/hatchback.svg'
import sedan from '../icons/sedan.svg'


import { filterBody, filterTransmission, filterBudget } from "../redux/action";

function Filter() {

  const dispatch = useDispatch();

  const carList = useSelector((state) => state.carList);
  const { cars } = carList;

  const carFilter = useSelector((state) => state.carFilter);
  const { cars: filteredCars } = carFilter;

  const handleBodyType = value => {
    dispatch(filterBody(cars, value));
  };

  const handleTransmission = value => {
    dispatch(filterTransmission(cars, value));

  };

  const handleBudget = value => {
    dispatch(filterBudget(cars, value));

  };

  const searchSubmit = () => {
    console.log('Need to add Feature')
  }
  return (
    <>

      <div className={filter.filter}>
        <p className={filter.uline}>Filter</p>
        <Link to='/'>
          <img className={filter.close} src={close} alt="close"></img>
        </Link>
      </div>


      <ul>

        <li>
          <input type="checkbox" id="list-item-3" />
          <label htmlFor="list-item-3" className={filter.last}>BUDGET<span>
            <img src={dropdown} alt="dropdown"></img>
          </span></label>
          <ul>
            <li>
              <div onClick={e => handleBudget("a")} className={filter.select}>
                <p className={filter.budget}>&#8377;</p>
                <p className={filter.budget1}>&#60; 10 LAKH</p>
              </div>
            </li>
            <li>
              <div onClick={e => handleBudget("b")} className={filter.select}>
                <p className={filter.budget}>&#8377;&#8377;</p>
                <p className={filter.budget1}>10 -25 LAKH</p>
              </div>
            </li>
            <li>
              < div onClick={e => handleBudget("c")} className={filter.select}>
                <p className={filter.budget}>&#8377;&#8377;&#8377;</p>
                <p className={filter.budget1}>&#62; 25 LAKH</p>
              </div>
            </li>
          </ul>
        </li>


        <li>
          <input type="checkbox" id="list-item-2" />
          <label htmlFor="list-item-2">BODY TYPE <span>
            <img src={dropdown} alt="dropdown"></img>
          </span></label>
          <ul>
            <li>
              <div onClick={e => handleBodyType("suv")} className={filter.select}>
                <img src={suv} alt="dropdown"
                ></img>
                <p className={filter.budget1}>suv</p>
              </div>
            </li>
            <li>
              <div onClick={e => handleBodyType("hatchback")} className={filter.select}>
                <img src={hatchback} alt="dropdown"
                ></img>
                <p className={filter.budget1}>hatchback</p>
              </div>
            </li>
            <li>
              <div onClick={e => handleBodyType("sedan")} className={filter.select}>
                <img src={sedan} alt="dropdown"
                ></img>
                <p className={filter.budget1}>sedan</p>
              </div>
            </li>
          </ul>
        </li>


        <li>
          <input type="checkbox" id="list-item-1" />
          <label htmlFor="list-item-1" className={filter.first}>TRANSMISSION TYPE <span>
            <img src={dropdown} alt="dropdown"></img>
          </span> </label>
          <ul>
            <li>
              <div onClick={e => handleTransmission("manual")} className={filter.select}>
                <p className={filter.budget1}>MANUAL</p>
              </div>
            </li>
            <li>
              <div onClick={e => handleTransmission("auto")} className={filter.select}>
                <p className={filter.budget1}>AUTOMATIC</p>
              </div>
            </li>
            <li>
              <div onClick={e => handleTransmission("both")} className={filter.select}>
                <p className={filter.budget1}>BOTH</p>
              </div>
            </li>
          </ul>
        </li>

      </ul>

      <div className={container.container1}>
        {filteredCars && filteredCars.map(res => (
          <FilterCars key={res.id} res={res}></FilterCars>
        ))}
      </div>

      <div className={button.center}>
        <div onClick={searchSubmit} className={button.search} >
          <p>SEARCH</p>
        </div>
      </div>

    </>
  )
}

export default Filter
