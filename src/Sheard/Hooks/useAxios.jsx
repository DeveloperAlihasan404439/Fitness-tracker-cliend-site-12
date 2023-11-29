import axios from 'axios'
import useAuth from './useAuth';
const axiosSecure = axios.create({
    baseURL: 'http://localhost:5000',
    withCredentials: true
})
const useAxios = () => {
    const { logOut } = useAuth() || {}

 axiosSecure.interceptors.response.use(function (response) {
        return response;
    }, async function (error) {
        if (error.response.status === 401 || error.response.status === 403) {
            await logOut()
            console.log('log out')
        }
        return Promise.reject(error);
    }); 
    return axiosSecure;
};
export default useAxios;


