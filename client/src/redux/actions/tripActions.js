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
  GET_TRIP_COUNT_REQUEST,
  GET_TRIP_COUNT_SUCCESS,
  GET_TRIP_COUNT_FAILED,
  FIND_TRIPS_REQUEST,
  FIND_TRIPS_SUCCESS,
  FIND_TRIPS_FAILED,
  GET_SELECTED_TRIP_REQUEST,
  GET_SELECTED_TRIP_SUCCESS,
  GET_SELECTED_TRIP_FAILED,
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
} from "./tripTypes";
import axios from "axios";

import { setToken } from "../../helpers/helpers";

export const addTrip = (newTrip) => async (dispatch) => {
  dispatch({ type: ADD_TRIP_REQUEST });
  try {
    setToken(); //put token on header
    const { data } = await axios.post(`/api/trip/addtrip`, newTrip);
    dispatch({
      type: ADD_TRIP_SUCCESS,
      payload: data,
    });
    alert("Trip added successfully!");
  } catch (err) {
    dispatch({
      type: ADD_TRIP_FAILED,
      payload: err.response.data.errors,
    });
  }
};

export const getMyTrip = (page, limit) => async (dispatch) => {
  dispatch({ type: GET_TRIP_REQUEST });
  try {
    setToken();
    const { data } = await axios.get(
      `/api/trip/mytrips?page=${page}&limit=${limit}`
    );
    dispatch({
      type: GET_TRIP_SUCCESS,
      payload: data,
    });
  } catch (err) {
    dispatch({
      type: GET_TRIP_FAILED,
      payload: err.response.data.errors,
    });
  }
};

export const getAllTrips = (page, limit) => async (dispatch) => {
  dispatch({ type: GET_ALL_TRIP_REQUEST });
  try {
    const { data } = await axios.get(
      `/api/trip/alltrips?page=${page}&limit=${limit}`
    );
    dispatch({
      type: GET_ALL_TRIP_SUCCESS,
      payload: data,
    });
  } catch (err) {
    dispatch({
      type: GET_ALL_TRIP_FAILED,
      payload: err.response.data.errors,
    });
  }
};

export const findTrips = (from, to, dateTime) => async (dispatch) => {
  dispatch({ type: FIND_TRIPS_REQUEST });
  try {
    const { data } = await axios.get(
      `/api/trip/findtrips?from=${from}&to=${to}&dateTime=${dateTime}`
    );
    dispatch({
      type: FIND_TRIPS_SUCCESS,
      payload: data,
    });
  } catch (err) {
    dispatch({
      type: FIND_TRIPS_FAILED,
      payload: err.response.data.errors,
    });
  }
};

export const getTripCount = () => async (dispatch) => {
  dispatch({ type: GET_TRIP_COUNT_REQUEST });
  try {
    const { data } = await axios.get(`/api/trip/tripCount`);
    dispatch({
      type: GET_TRIP_COUNT_SUCCESS,
      payload: data,
    });
  } catch (err) {
    dispatch({
      type: GET_TRIP_COUNT_FAILED,
      payload: err.response.data.errors,
    });
  }
};

export const getSelectedTrip = (id) => async (dispatch) => {
  dispatch({ type: GET_SELECTED_TRIP_REQUEST });
  try {
    setToken();
    const { data } = await axios.get(`/api/trip/selectedtrip/${id}`);
    dispatch({
      type: GET_SELECTED_TRIP_SUCCESS,
      payload: data,
    });
  } catch (err) {
    dispatch({
      type: GET_SELECTED_TRIP_FAILED,
      payload: err.response.data.errors,
    });
  }
};
export const getreservedTrip = (id) => async (dispatch) => {
  dispatch({ type: GET_RESERVED_TRIP_REQUEST });
  try {
    setToken();
    const { data } = await axios.get(`/api/trip/getreservedTrip/${id}`);
    dispatch({
      type: GET_RESERVED_TRIP_SUCCESS,
      payload: data,
    });
  } catch (err) {
    dispatch({
      type: GET_RESERVED_TRIP_FAILED,
      payload: err.response.data.errors,
    });
  }
};

export const updateSeatingCapacity = (id, info, user) => async (dispatch) => {
  dispatch({ type: PUT_SEATING_CAPACITY_REQUEST });
  try {
    setToken(); // receive the tokenn from the localStorage

    const { data } = await axios.put(
      `/api/trip/updateSeatingCapacity/${id}`,
      info,
      user
    );
    dispatch({
      type: PUT_SEATING_CAPACITY_SUCCESS,
      payload: data,
    });
    alert("Trip Reserved!");
  } catch (err) {
    dispatch({
      type: PUT_SEATING_CAPACITY_FAILED,
      payload: err.response.data.errors,
    });
  }
};

export const updateTrip = (id, newTrip, iduser) => async (dispatch) => {
  dispatch({ type: PUT_TRIP_REQUEST });
  try {
    setToken(); // receive the tokenn from the localStorage
    const { data } = await axios.put(
      `/api/trip/updatetrip/${id}`,
      newTrip,
      iduser
    );

    dispatch({
      type: PUT_TRIP_SUCCESS,
      payload: data,
    });
    alert("Trip edited successfully!");
  } catch (err) {
    dispatch({
      type: PUT_TRIP_FAILED,
      payload: err.response.data.errors,
    });
  }
};

export const deleteTrip = (id) => async (dispatch) => {
  dispatch({ type: DELETE_TRIP_REQUEST });
  try {
    setToken(); // receive the tokenn from the localStorage
    const { data } = await axios.delete(`/api/trip/deletetrip/${id}`);
    dispatch({
      type: DELETE_TRIP_SUCCESS,
      payload: data,
    });
    alert("Trip deleted successfully!");
  } catch (err) {
    dispatch({
      type: DELETE_TRIP_FAILED,
      payload: err.response.data.errors,
    });
  }
};
