import axios from "axios";
//have the token from the backend (localStorage)(token:idUser) -> put it on the header 'auth-token'
export const setToken = () => {
  const token = localStorage.getItem("token");
  if (token) axios.defaults.headers.common["auth-token"] = token;
  else delete axios.defaults.headers.commoncommon["auth-token"];
};
