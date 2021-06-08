import {
  CAR_LIST_REQUEST,
  CAR_LIST_SUCCESS,
  CAR_LIST_FAIL,
  FILTER_TOTAL
} from './constants';
import Axios from 'axios';

const listCars = () => async (dispatch) => {
  try {
    dispatch({ type: CAR_LIST_REQUEST });
    const { data } = await Axios.get(`https://6083a8f35dbd2c001757b9a7.mockapi.io/api/v1/cars`);
    dispatch({ type: CAR_LIST_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: CAR_LIST_FAIL, payload: error });
  }
};


const filterTotal = (cars, budget, bodytype, transmission) => (dispatch) => {
  dispatch({ type: FILTER_TOTAL, payload: { cars, budget, bodytype, transmission } });
};



export {
  listCars,
  filterTotal
};