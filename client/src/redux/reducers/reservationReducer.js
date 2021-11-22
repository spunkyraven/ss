import {
  ADD_TRIP_REQUEST,
  ADD_TRIP_SUCCESS,
  ADD_TRIP_FAILED,
  GET_TRIP_REQUEST,
  GET_TRIP_SUCCESS,
  GET_TRIP_FAILED,
  GET_ALL_TRIP_REQUEST,
  GET_ALL_TRIP_SUCCESS,
  GET_ALL_TRIP_FAILED,
  GET_TRIP_COUNT_SUCCESS,
  FIND_TRIPS_REQUEST,
  FIND_TRIPS_SUCCESS,
  FIND_TRIPS_FAILED,
  GET_RESERVED_TRIP_REQUEST,
  GET_RESERVED_TRIP_SUCCESS,
  GET_RESERVED_TRIP_FAILED,
  PUT_SEATING_CAPACITY_REQUEST,
  PUT_SEATING_CAPACITY_SUCCESS,
  PUT_SEATING_CAPACITY_FAILED,
  PUT_TRIP_REQUEST,
  PUT_TRIP_SUCCESS,
  PUT_TRIP_FAILED,
  DELETE_TRIP_REQUEST,
  DELETE_TRIP_SUCCESS,
  DELETE_TRIP_FAILED,
} from "../actions/tripTypes";

const initState = {
  reservationList: [],
  errors: null,
  isLoading: false,
  reservation: [],
};

const reservationReducer = (state = initState, { type, payload }) => {
  switch (type) {
    case ADD_TRIP_REQUEST:
    case GET_TRIP_REQUEST:
    case GET_ALL_TRIP_REQUEST:
    case FIND_TRIPS_REQUEST:
    case GET_RESERVED_TRIP_REQUEST:
    case PUT_SEATING_CAPACITY_REQUEST:
    case PUT_TRIP_REQUEST:
    case DELETE_TRIP_REQUEST:
      return {
        ...state,
        errors: null,
        isLoading: true,
      };
    case GET_TRIP_COUNT_SUCCESS:
      return {
        ...state,
        count: payload.count,
      };
    case ADD_TRIP_SUCCESS:
    case GET_TRIP_SUCCESS:
    case GET_ALL_TRIP_SUCCESS:
    case GET_RESERVED_TRIP_SUCCESS:
      return { ...state, isLoading: false, reservationList: payload };
    case PUT_SEATING_CAPACITY_SUCCESS:
    case PUT_TRIP_SUCCESS:
    case DELETE_TRIP_SUCCESS:
      return {
        ...state,
        reservationList: payload,
        isLoading: false,
      };
    case FIND_TRIPS_SUCCESS:
      return {
        ...state,
        reservationList: payload,
        isLoading: false,
        count: payload.length,
      };
    case ADD_TRIP_FAILED:
    case GET_TRIP_FAILED:
    case GET_ALL_TRIP_FAILED:
    case FIND_TRIPS_FAILED:
    case GET_RESERVED_TRIP_FAILED:
    case PUT_SEATING_CAPACITY_FAILED:
    case PUT_TRIP_FAILED:
    case DELETE_TRIP_FAILED:
      return {
        ...state,
        isLoading: false,
        errors: payload,
      };

    default:
      return state;
  }
};

export default reservationReducer;
