import { useQuery } from "@tanstack/react-query";
import useAxios from "./useAxios";
import useAuth from "./useAuth";

const useUsers = () => {
    const axiosSecure = useAxios()
    const {user} = useAuth()
    console.log(user?.email);
    const { data: usersData=[],isLoading, refetch } = useQuery({
        queryKey: ['users',user?.email],
        queryFn: async() =>{
            const {data} = await axiosSecure.get(`/users?email=${user?.email}`)
            return data
        }
      })
      return {usersData,isLoading,refetch}
};

export default useUsers;