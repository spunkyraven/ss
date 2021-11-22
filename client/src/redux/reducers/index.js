import { combineReducers } from "redux";
import authReducer from "../reducers/authReducer";
import tripReducer from "../reducers/tripReducer";
import reservationReducer from "../reducers/reservationReducer";

export default combineReducers({
  auth: authReducer,
  trips: tripReducer,
  reservations: reservationReducer,
});
