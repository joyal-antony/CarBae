import {
  CAR_LIST_REQUEST,
  CAR_LIST_SUCCESS,
  CAR_LIST_FAIL,
  FILTER_BODY,
  FILTER_TRANSMISSION,
  FILTER_BUDGET,
  FILTER_TOTAL
} from './constants';
import Axios from 'axios';

const listCars = () => async (dispatch) => {
  try {
    dispatch({ type: CAR_LIST_REQUEST });
    const { data } = await Axios.get(`https://6083a8f35dbd2c001757b9a7.mockapi.io/api/v1/cars`);
    dispatch({ type: CAR_LIST_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: CAR_LIST_FAIL, payload: error.response.data });
  }
};

const filterBody = (cars, value) => (dispatch) => {
  dispatch({ type: FILTER_BODY, payload: { cars, value } });
};

const filterTransmission = (cars, value) => (dispatch) => {
  dispatch({ type: FILTER_TRANSMISSION, payload: { cars, value } });
};

const filterBudget = (cars, value) => (dispatch) => {
  dispatch({ type: FILTER_BUDGET, payload: { cars, value } });
};

const filterTotal = (cars, budget, bodytype, transmission) => (dispatch) => {
  dispatch({ type: FILTER_TOTAL, payload: { cars, budget, bodytype, transmission } });
};



export {
  listCars,
  filterBody,
  filterTransmission,
  filterBudget,
  filterTotal
};