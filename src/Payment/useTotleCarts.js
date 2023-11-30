import { useQuery } from "@tanstack/react-query";
import useAxiosPublick from "../Sheard/Hooks/useAxiosPublick";


const useTotleCarts = () => {
    const axiosPublick = useAxiosPublick()
    const {data: booking = [], isLoading,refetch } = useQuery({
        queryKey: ['member'],
        queryFn: async() =>{
            const res = await axiosPublick.get(`/userBooking`)
            const data = res.data;
            return data
        }
      })
      return {booking,isLoading,refetch}
};

export default useTotleCarts;