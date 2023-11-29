import useAxiosPublick from "../Sheard/Hooks/useAxiosPublick";

const FeaturedClass = () => {
    const axiosPublick = useAxiosPublick()
    useEffect(()=>{
        axiosPublick.get('featured/class')
        .then(res => {
            console.log(res.data)
        })
    },[axiosPublick])
    return (
        <div className="w-11/12 mx-auto">
            hogkdg dkjgkd
        </div>
    );
};

export default FeaturedClass;