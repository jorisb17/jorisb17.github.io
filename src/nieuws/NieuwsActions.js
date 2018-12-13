import {FETCH_NIEUWS_PENDING, FETCH_NIEUWS_SUCCES, FETCH_NIEUWS_ERROR} from './NieuwsConstants';
import {apiCall} from "../api/api";

export const requestNieuws = () => (dispatch) => {
  dispatch({ type: FETCH_NIEUWS_PENDING });
  apiCall('http://localhost:3000/nieuws')
      .then(data => dispatch({ type: FETCH_NIEUWS_SUCCES, payload: data }))
      .catch(error => dispatch({ type: FETCH_NIEUWS_ERROR, payload: error }))
};
