import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from "react-redux";
import { listCars } from "../redux/action";

import car from './Car.module.css'
import filter from '../icons/filter.svg'

import Search from './Search';
import FilterCars from './FilterCars';
import Filter from './Filter';


function Car() {

  const carList = useSelector((state) => state.carList);
  const { cars, loading, error } = carList;

  const carFilter = useSelector((state) => state.carFilter);
  const { cars: filteredCars, filtered } = carFilter;

  const [modal, setModal] = useState(false)

  const dispatch = useDispatch();


  useEffect(() => {
    dispatch(listCars());
  }, []);

  const clickHandler = () => {
    setModal(true)
  }
  const unclickHandler = () => {
    setModal(false)
  }
  let data = (!!filtered) ? filteredCars : cars
  return (<>
    {modal && <Filter modal click={unclickHandler} />}
    {!modal && <section >
      <div className={car.container1} >
        {error && <p>Something went wrong</p>}
        {loading && <p>Loading.....</p>}
        {(data && data.length > 0) ? data.map(res => (
          <FilterCars key={res.id} res={res}></FilterCars>
        )) : <p >No data found</p>}
        <Search icon={filter} name="Filter" click={clickHandler} />
      </div>
    </section >
    }
  </>
  )
}

export default Car
