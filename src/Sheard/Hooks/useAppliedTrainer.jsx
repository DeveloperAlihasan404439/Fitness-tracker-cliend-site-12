import { useQuery } from "@tanstack/react-query";
import useAxios from "./useAxios";

const useAppliedTrainer = () => {
    const axiosSecure = useAxios()
    const { data: tariners=[],isLoading, refetch } = useQuery({
        queryKey: ['repoData'],
        queryFn: async() =>{
            const {data} = await axiosSecure.get('/tariners')
            return data
        }
      })
      return {tariners,isLoading,refetch}
};

export default useAppliedTrainer;