import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxios from "./useAxios";

const useTrainer = () => {
    const axiosSecure = useAxios()
    const {user} = useAuth()
    const {data: isTrainer,  } = useQuery({
        queryKey: ['isTrainer',user?.email],
        queryFn: async() =>{
            const res = await axiosSecure.get(`/users/trainer?email=${user?.email}`)
            const data = res.data;
            return data?.admin
        }
      })
    return {isTrainer};
};

export default useTrainer;