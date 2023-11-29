import { useQuery } from "@tanstack/react-query";
import useAxiosPublick from "./useAxiosPublick";
import useAuth from "./useAuth";

const useBooking = () => {
    const axiosPublick = useAxiosPublick()
    const {user} = useAuth()
    const { data: bookingUser=[],isLoading } = useQuery({
        queryKey: ['bookingUser',user?.email],
        queryFn: async() =>{
            const {data} = await axiosPublick.get(`/userBooking/class/list?email=${user?.email}`)
            return data
        }
      })
      return {bookingUser,isLoading}
};

export default useBooking;