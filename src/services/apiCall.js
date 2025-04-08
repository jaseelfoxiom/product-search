
import axios from "axios";
import { Base_Url } from "./base_url";


export const apiCall = async (method, endPoint, data, params, is_formdata) => {
  var headers = {
    "Content-Type": is_formdata ? "multipart/form-data" : "application/json",
    Authorization: "Bearer " + localStorage.getItem("token"),
  };
  var url = Base_Url + endPoint;
  try {
    const res = await axios({
      method,
      url,
      params,
      data,
      headers,
    });
    var response = { status: true, message: res.data };

    return response;
  } catch (error) {
    if (error?.status === 401) {
      localStorage.removeItem("token")

      window.location.href = '/login'; 
    }
    
    throw new Error(error?.response?.data?.message ?? "Something went wrong");
  }
};
