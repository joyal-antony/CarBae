import {
  CAR_LIST_REQUEST,
  CAR_LIST_SUCCESS,
  CAR_LIST_FAIL,
  FILTER_BODY,
  FILTER_TRANSMISSION,
  FILTER_BUDGET
} from './constants.js'

function carListReducer(state = { cars: [] }, action) {
  switch (action.type) {
    case CAR_LIST_REQUEST:
      return { loading: true, cars: [] };
    case CAR_LIST_SUCCESS:
      return { loading: false, cars: action.payload };
    case CAR_LIST_FAIL:
      return { loading: false, errors: action.payload };
    default:
      return state;
  }
}

function carFilterReducer(state = { cars: [] }, action) {
  switch (action.type) {
    case FILTER_BODY:
      const item = action.payload;
      const cars = action.payload.cars.filter(x => x.body_type === item.value);
      return {
        cars
      };

    case FILTER_TRANSMISSION:
      const trsns = action.payload;
      const cars_trs = action.payload.cars.filter(x => x.transmission_types === trsns.value);
      return {
        cars: cars_trs
      };

    case FILTER_BUDGET:
      const budg = action.payload;
      const bugdFilter = action.payload.cars.filter(product => {
        const amount = (product.price_starts + product.price_ends) / 2
        if (budg.value === "a") {
          return (amount < 1000000) ? product : undefined;
        }
        else if (budg.value === "b") {
          return (amount > 1000000 && amount < 2500000) ? product : undefined;
        }
        else if (budg.value === "c") {
          return (amount > 2500000) ? product : undefined;
        }
        else return (product)
      });
      return {
        cars: bugdFilter
      };

    default:
      return state;
  }
}

export {
  carListReducer,
  carFilterReducer
};