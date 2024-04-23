import axios from "axios"

const apiUrl = process.env.REACT_APP_BASE_URL

export const axiosGuestInstance = axios.create({
  baseURL: apiUrl
})

axiosGuestInstance.interceptors.request.use(
  (config) => {
    if (config.url?.includes("/users/")) {
      const token = localStorage.getItem("token")
      console.log(token)
      config.headers.Authorization = `Bearer ${token}`;
    }
    else if (config.url?.includes("/admins/")) {
      const token = localStorage.getItem("token")
      console.log(token, "here")
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

axiosGuestInstance.interceptors.response.use(
  (response) => {
    if (response.config?.url?.includes("/auth/login")) {
      const accessToken = response.data.auth_token
      console.log(accessToken)
      const userData = response.data.data
      const jsonString = JSON.stringify(userData);
      localStorage.setItem("userData", jsonString)
      localStorage.setItem("token", accessToken)
    }
    else {

    }

    return response;
  },
  (error) => {
    return Promise.reject(error);
  }
);

