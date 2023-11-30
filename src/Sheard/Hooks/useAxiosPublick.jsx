import axios from "axios";
const axiosPublick = axios.create({
  baseURL: "http://localhost:5000",
  // baseURL: "https://body-pulse.vercel.app"
  // withCredentials: true
});

const useAxiosPublick = () => {
  return axiosPublick;
};

export default useAxiosPublick;
