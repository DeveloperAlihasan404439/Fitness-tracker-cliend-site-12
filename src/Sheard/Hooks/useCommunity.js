import useAxiosPublick from './useAxiosPublick';
import { useQuery } from '@tanstack/react-query';

const useCommunity = () => {
    const axiosPublick = useAxiosPublick();
  const {data: community = [], isLoading,refetch } = useQuery({
    queryKey: ['community',],
    queryFn: async() =>{
        const res = await axiosPublick.get("/featured/class")
        const data = res.data;
        return data
    }
  })
  return {community,isLoading,refetch}
};

export default useCommunity;