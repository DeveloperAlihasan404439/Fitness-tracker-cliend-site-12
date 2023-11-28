import { useQuery } from "@tanstack/react-query";
import useAxios from "./useAxios";

const useClass = () => {
    const axiosSecure =useAxios()
    const { data: classAll=[],isLoading, refetch } = useQuery({
        queryKey: ['class'],
        queryFn: async() =>{
            const {data} = await axiosSecure.get('/class')
            return data
        }
      })
      return {classAll,isLoading,refetch}
};

export default useClass;