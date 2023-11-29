import { useQuery } from "@tanstack/react-query";
import useAxiosPublick from "./useAxiosPublick";

const useTrainerAll = () => {
    const axiosPublick = useAxiosPublick()
    const { data: trainer=[],isLoading } = useQuery({
        queryKey: ['trainer'],
        queryFn: async() =>{
            const {data} = await axiosPublick.get('/confrimTariners')
            return data
        }
      })
      return {trainer,isLoading}
};

export default useTrainerAll;