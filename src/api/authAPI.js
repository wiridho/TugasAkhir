import { doPost } from "./baseAPI";
import { END_POINT } from "../constant/endpoint";
import apiConfig from "./apiConfig";

export const postLogin = async (request) =>
  await doPost({
    ...{ endpoint: apiConfig.baseUrl + END_POINT.AUTH.LOGIN },
    ...request,
  });
