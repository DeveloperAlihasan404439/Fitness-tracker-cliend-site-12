
import { useQuery } from "@tanstack/react-query";
import useAxiosPublick from "./useAxiosPublick";
import useAuth from "./useAuth";

const usePaymentHistore = () => {
    const axiosPublick = useAxiosPublick()
    const {user} = useAuth()
    const {data: paymentInfonmation,isLoading, refetch} = useQuery({
        queryKey: ['isTrainer',user?.email],
        queryFn: async() =>{
            const res = await axiosPublick.get(`/payment/data/history?email=${user?.email}`)
            const data = res.data;
            return data
        }
      })
    return {paymentInfonmation,isLoading,refetch};
};

export default usePaymentHistore;