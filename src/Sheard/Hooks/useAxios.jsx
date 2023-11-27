import axios from 'axios'
// import { useNavigate } from 'react-router-dom';
// import useAuth from './useAuth';
const axiosSecure = axios.create({
    baseURL: 'http://localhost:5000',
    withCredentials: true
})
const useAxios = () => {
    /* const navigate = useNavigate();
    const {logout} = useAuth()
    axiosSecure.interceptors.response.use((response)=>{
        return response
    },async (error) =>{
        const status = error.response?.status;
        if(status === 401 || status === 403){
            await logout()
            navigate('/login')
        }
        return Promise.reject(error);
    }) */
    return axiosSecure;
};
export default useAxios;