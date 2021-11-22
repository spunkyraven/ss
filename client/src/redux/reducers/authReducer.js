import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILED,
  GET_PROFILE_REQUEST,
  GET_PROFILE_SUCCESS,
  GET_PROFILE_FAILED,
  REGISTER_REQUEST,
  REGISTER_SUCCESS,
  REGISTER_FAILED,
  PUT_ROLE_REQUEST,
  PUT_ROLE_SUCCESS,
  PUT_ROLE_FAILED,
  PUT_PROFILE_REQUEST,
  PUT_PROFILE_SUCCESS,
  PUT_PROFILE_FAILED,
  LOGOUT,
} from "../actions/authTypes";

import {
  GET_TRIP_REQUEST,
  GET_TRIP_SUCCESS,
  GET_TRIP_FAILED,
} from "../actions/tripTypes";

const initState = {
  token: localStorage.getItem("token"),
  isAuth: localStorage.getItem("isAuth"),
  user: JSON.parse(localStorage.getItem("user")),
  isLoading: false,
  isRegistred: false,
  errors: null,
};

const authReducer = (state = initState, { type, payload }) => {
  switch (type) {
    case LOGIN_REQUEST:
    case REGISTER_REQUEST:
    case GET_PROFILE_REQUEST:
    case PUT_PROFILE_REQUEST:
    case PUT_ROLE_REQUEST:
    case GET_TRIP_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case REGISTER_SUCCESS:
      return {
        isLoading: false,
        isRegistred: true,
        errors: null,
      };

    case LOGIN_SUCCESS:
      localStorage.setItem("token", payload.token);
      localStorage.setItem("isAuth", true);
      return {
        ...state,
        isLoading: false,
        isRegistred: true,
        isAuth: true,
        errors: null,
        user: payload.user,
        token: payload.token,
      };
    case GET_TRIP_SUCCESS:
      return {
        ...state,
        isLoading: false,
        errors: null,
        user: {
          ...state.user,
          trips: payload.user,
        },
      };
    case GET_PROFILE_SUCCESS:
      localStorage.setItem("user", JSON.stringify(payload));
      return {
        ...state,
        isRegistred: true,
        isAuth: true,
        isLoading: false,
        user: payload.user,
      };
    case PUT_PROFILE_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isRegistred: true,
        isAuth: true,
        user: { user: { payload } },
      };
    case PUT_ROLE_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isRegistred: true,
        isAuth: true,
        user: payload.user,
      };
    case LOGOUT:
      localStorage.clear();
      return {
        ...state,
        isAuth: false,
        user: null,
        token: null,
      };

    case LOGIN_FAILED:
    case REGISTER_FAILED:
    case GET_PROFILE_FAILED:
    case GET_TRIP_FAILED:
    case PUT_ROLE_FAILED:
    case PUT_PROFILE_FAILED:
      return {
        ...state,
        isLoading: false,
        isAuth: false,
        errors: payload,
        token: null,
      };

    default:
      return state;
  }
};

export default authReducer;
