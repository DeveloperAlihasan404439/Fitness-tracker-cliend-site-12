import { useQuery } from "@tanstack/react-query";
import useAuth from "../Sheard/Hooks/useAuth";
import useAxios from "../Sheard/Hooks/useAxios";


const useTotleCarts = () => {
    const axiosSecure = useAxios()
    const {user} = useAuth()
    const {data: cart = [], isLoading,refetch } = useQuery({
        queryKey: ['membor',user?.email],
        queryFn: async() =>{
            const res = await axiosSecure.get(`/membor/payment?email=${user?.email}`)
            const data = res.data;
            return data
        }
      })
      return {cart,isLoading,refetch}
};

export default useTotleCarts;