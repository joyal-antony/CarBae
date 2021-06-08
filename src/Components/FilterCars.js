import React from 'react'
import filCar from './filterCars.module.css'


function FilterCars(props) {
  return (
    <div key={props.res.id} className={filCar.row1}>
      <div className={filCar['col-41']}>
        <img
          className={filCar.img}
          alt=""
          src={props.res.main_image}
        />
      </div>
      <div className={filCar['col-61']}>
        <p className={filCar.name}>{props.res.name}</p>
        <p className={filCar.price}>&#8377; {(props.res.price_starts / 100000).toFixed(2)} - {(props.res.price_ends / 100000).toFixed(2)} Lakh</p>
        <br />
        <p className={filCar.blur}>6 Varaints</p>
      </div>
    </div>
  )
}

export default FilterCars
