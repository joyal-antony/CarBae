import React, { useEffect } from 'react'
import { useSelector, useDispatch } from "react-redux";
import { listCars } from "../redux/action";

import car from './Car.module.css'
import filter from '../icons/filter.svg'

import Search from './Search';
import FilterCars from './FilterCars';


function Car() {

  const carList = useSelector((state) => state.carList);
  const { cars, loading, error } = carList;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(listCars());
  }, [dispatch]);

  return (
    <section >
      <div className={car.container1} >
        {error && <p>Something went wrong</p>}
        {loading && <p>Loading.....</p>}
        {cars && cars.map(res => (
          <FilterCars key={res.id} res={res}></FilterCars>
        ))}
        <Search icon={filter} name="Filter" location='filter' />
      </div>
    </section >
  )
}

export default Car
