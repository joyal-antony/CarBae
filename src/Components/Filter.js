import React, { useState } from 'react'
import { useSelector, useDispatch } from "react-redux";
import Search from './Search';


import { filterTotal } from "../redux/action";

import filter from './Filter.module.css'

import close from '../icons/close.svg'
import suv from '../icons/suv.svg'
import dropdown from '../icons/dropdown.svg'
import hatchback from '../icons/hatchback.svg'
import sedan from '../icons/sedan.svg'
import search from '../icons/search.svg'


function Filter(props) {


  const [bodyType, setBodyType] = useState('')
  const [transmission, setTransmission] = useState('')
  const [budget, setBudget] = useState('')



  const dispatch = useDispatch();

  const carList = useSelector((state) => state.carList);
  const { cars } = carList;


  const carFilter = useSelector((state) => state.carFilter);
  const { filtered } = carFilter;


  const handleBodyType = value => {
    setBodyType(value)
  };

  const handleTransmission = value => {
    setTransmission(value)
  };

  const handleBudget = value => {
    setBudget(value)
  };

  const searchSubmit = () => {
    dispatch(filterTotal(cars, budget, bodyType, transmission));
    // history.push("/");
    props.click()

  }

  return (
    <>
      <div className={filter.filter}>
        <p className={filter.uline}>Filter</p>
        <div onClick={e => props.click()}>
          <img className={filter.close} src={close} alt="close"></img>
        </div>
      </div>

      <ul>

        <li>
          <input type="checkbox" id="list-item-3" />
          <label htmlFor="list-item-3" className={filter.last}>BUDGET<span>
            {(budget === 'a') && (`< 10 lakh`)}
            {(budget === 'b') && (`10-25 lakh`)}
            {(budget === 'c') && (`> 25 lakh`)}
            <img src={dropdown} alt="dropdown"></img>
          </span>
          </label>
          <ul>
            <Budget isActive={budget === 'a'} click={e => handleBudget("a")} img='&#8377;' dep='&#60; 10 LAKH' />
            <Budget isActive={budget === 'b'} click={e => handleBudget("b")} img='&#8377;&#8377;' dep='10 -25 LAKH ' />
            <Budget isActive={budget === 'c'} click={e => handleBudget("c")} img='&#8377;&#8377;&#8377;' dep='&#62; 25 LAKH' />
          </ul>
        </li>

        <li>
          <input type="checkbox" id="list-item-2" />
          <label htmlFor="list-item-2">BODY TYPE <span>
            {bodyType}
            <img src={dropdown} alt="dropdown"></img>
          </span></label>
          <ul>
            <BodyType isActive={bodyType === 'suv'} click={e => handleBodyType("suv")} img={suv} dep='suv' />
            <BodyType isActive={bodyType === 'hatchback'} click={e => handleBodyType("hatchback")} img={hatchback} dep='hatchback' />
            <BodyType isActive={bodyType === 'sedan'} click={e => handleBodyType("sedan")} img={sedan} dep='sedan' />
          </ul>
        </li>

        <li>
          <input type="checkbox" id="list-item-1" />
          <label htmlFor="list-item-1" className={filter.first}>TRANSMISSION TYPE <span>
            {transmission}
            <img src={dropdown} alt="dropdown"></img>
          </span> </label>
          <ul>
            <Transmission isActive={transmission === 'manual'} click={e => handleTransmission("manual")} dep='MANUAL' />
            <Transmission isActive={transmission === 'auto'} click={e => handleTransmission("auto")} dep='AUTOMATIC' />
            <Transmission isActive={transmission === 'both'} click={e => handleTransmission("both")} dep='BOTH' />
          </ul>
        </li>

      </ul>

      <Search icon={search} name={!!filtered ? "Clear / Search" : "Search"} click={searchSubmit} />

    </>
  )
}

export default Filter

const Budget = (props) => {
  const BudgetSelect = props.isActive ? `${filter.select} ${filter.selected}` : filter.select
  return (
    <li>
      <div onClick={props.click} className={BudgetSelect}>
        <p className={filter.budget}>{props.img}</p>
        <p className={filter.budget1}>{props.dep}</p>
      </div>
    </li>
  )
}

const BodyType = (props) => {
  const BodyTypeSelect = props.isActive ? `${filter.select} ${filter.selected}` : filter.select

  return (
    <li>
      <div onClick={props.click} className={BodyTypeSelect}>
        <img src={props.img} alt=""
        ></img>
        <p className={filter.budget1}>{props.dep}</p>
      </div>
    </li>
  )
}

const Transmission = (props) => {
  const TransmissionSelect = props.isActive ? `${filter.select} ${filter.selected}` : filter.select

  return (
    <li>
      <div onClick={props.click} className={TransmissionSelect}>
        <p className={filter.budget1}>{props.dep}</p>
      </div>
    </li>
  )
}