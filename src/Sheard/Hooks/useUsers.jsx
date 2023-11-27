import { useQuery } from "@tanstack/react-query";
import useAxios from "./useAxios";

const useUsers = () => {
    const axiosSecure = useAxios()
    const { data: users=[],isLoading, refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async() =>{
            const {data} = await axiosSecure.get('/users')
            return data
        }
      })
      return {users,isLoading,refetch}
};

export default useUsers;