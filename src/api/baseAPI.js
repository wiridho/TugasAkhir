import axios from "axios";
import apiConfig from "./apiConfig";

// Before Login
export const login = async ({ endpoint, params, data }) => {
  const method = "POST";
  const url = apiConfig.baseUrl + endpoint;
  const request = {
    url,
    method,
    params,
    data,
  };
  const reponse = await axios(request);
  return reponse;
};

// After Login
export const doPost = async ({ endpoint, token, params, data }) => {
  const method = "POST";
  const headers = {
    Authorization: token,
  };
  const url = apiConfig.baseUrl + endpoint;

  const request = {
    url,
    method,
    headers,
    params,
    data,
  };

  const response = await axios(request);
  return response;
};

//if method 'get'
export const doGet = async ({ endpoint, token, params, data }) => {
  const method = "GET";
  const headers = {
    Authorization: token,
  };
  const url = apiConfig.baseUrl + endpoint;
  const request = {
    url,
    method,
    headers,
    params,
    data,
  };
  const response = await axios(request);
  return response;
};
