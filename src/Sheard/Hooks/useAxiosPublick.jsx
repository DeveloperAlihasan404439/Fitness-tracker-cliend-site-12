import axios from 'axios'
const axiosPublick = axios.create({
    baseURL: 'http://localhost:5000',
    // withCredentials: true
})

const useAxiosPublick = () => {
    return axiosPublick
};

export default useAxiosPublick;