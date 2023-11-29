import { useQuery } from "@tanstack/react-query";
import useAxios from "./useAxios";
import useAuth from "./useAuth";


const usePayment = () => {
    const axiosSecure = useAxios()
    const {user} = useAuth()
    const {data: paymentHistroy = [], isLoading,refetch } = useQuery({
        queryKey: ['payment',user?.email],
        queryFn: async() =>{
            const res = await axiosSecure.get(`/payment?email=${user?.email}`,{withCredentials: true})
            const data = res.data;
            return data
        }
      })
      return {paymentHistroy,isLoading,refetch}
};

export default usePayment;
