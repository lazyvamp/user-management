import axios from "axios";


axios.interceptors.response.use(null, (error) => {
  const expectedError =
    error.response &&
    error.response.status >= 400 &&
    error.response.status < 500;

  if (!expectedError) {
    console.log("Please check internet connection or please contact system admin");
  }
  return Promise.reject(error);
});

axios.interceptors.request.use(function (config) {
  return config;
});

const http = {
  get: axios.get,
  post: axios.post,
  put: axios.put,
  delete: axios.delete,
};

export default http;
