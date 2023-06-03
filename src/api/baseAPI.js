import axios from "axios";

export const doPost = async ({ endpoint, token, params, data }) => {
  const method = "POST";
  const headers = {
    Authorization: token,
  };
  const url = endpoint;

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
