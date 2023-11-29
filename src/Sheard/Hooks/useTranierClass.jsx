import { useQuery } from "@tanstack/react-query";
import useAxiosPublick from "./useAxiosPublick";

const useTranierClass = ({email}) => {
    const axiosPublick = useAxiosPublick()
    const { data: tranierClass=[],isLoading } = useQuery({
        queryKey: ['tranierClass',email],
        queryFn: async() =>{
            const {data} = await axiosPublick.get(`/tarinerApply/class/${email}`)
            return data
        }
      })
      return {tranierClass,isLoading}
};

export default useTranierClass;
