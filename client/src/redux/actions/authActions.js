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
import axios from "axios";
import { setToken } from "../../helpers/helpers";

export const login = (info) => async (dispatch) => {
  dispatch({ type: LOGIN_REQUEST }); //spinner : waiting for info
  try {
    const res = await axios.post(`/api/user/login`, info);
    dispatch({
      type: LOGIN_SUCCESS,
      payload: res.data,
    });
    dispatch(getProfile());
    alert("Welcome to JoyRide!");
  } catch (err) {
    dispatch({
      type: LOGIN_FAILED,
      payload: err.response.data.errors,
    });
  }
};

//asynchrone fct register
export const register = (info) => async (dispatch) => {
  dispatch({ type: REGISTER_REQUEST }); //spinner : waiting for info
  try {
    const res = await axios.post(`/api/user/register`, info);
    dispatch({
      type: REGISTER_SUCCESS,
      payload: res.data,
    });
    alert("Register successfully done!");
  } catch (err) {
    dispatch({
      type: REGISTER_FAILED,
      payload: err.response.data.errors,
    });
  }
};

//asynchrone fct getProfile
export const getProfile = () => async (dispatch) => {
  dispatch({ type: GET_PROFILE_REQUEST });
  try {
    setToken(); // receive the tokenn from the localStorage
    //api
    const { data } = await axios.get(`/api/user/getProfile`);
    dispatch({
      type: GET_PROFILE_SUCCESS,
      payload: data,
    });
  } catch (err) {
    dispatch({
      type: GET_PROFILE_FAILED,
      payload: err.response.data.errors,
    });
  }
};

//editProfile fct
export const editProfile = (id, info, history) => async (dispatch) => {
  dispatch({ type: PUT_PROFILE_REQUEST });
  try {
    setToken(); // receive the tokenn from the localStorage
    //api
    const { data } = await axios.put(`/api/user/editprofile/${id}`, info);
    dispatch({
      type: PUT_PROFILE_SUCCESS,
      payload: data,
    });
    alert("Profile Edited!");
    history.push("/profile");
  } catch (err) {
    dispatch({
      type: PUT_PROFILE_FAILED,
      payload: err.response.data.errors,
    });
    console.log(err);
  }
};

//updateRole fct
export const updateRole = (id, info) => async (dispatch) => {
  dispatch({ type: PUT_ROLE_REQUEST });
  try {
    setToken(); // receive the tokenn from the localStorage
    //api
    const { data } = await axios.put(`/api/user/updaterole/${id}`, info);
    dispatch({
      type: PUT_ROLE_SUCCESS,
      payload: data,
    });
    alert("You are a Rider Now!");
  } catch (err) {
    dispatch({
      type: PUT_ROLE_FAILED,
      payload: err.response.data.errors,
    });
  }
};

//logout fct
export const logout = () => {
  return {
    type: LOGOUT,
  };
};
