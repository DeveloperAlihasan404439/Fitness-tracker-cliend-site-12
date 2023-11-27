import { Link } from "react-router-dom";
import useAxiosPublick from "../Sheard/Hooks/useAxiosPublick";
import { useEffect } from "react";
import SectionTitle from "../Sheard/SectionTitle/SectionTitle";
const Trainer = () => {
    const axiosPublick = useAxiosPublick()
    useEffect(()=>{
        axiosPublick.get('/confrimTariners')
        .then(res => console.log(res.data))
    },[axiosPublick])
    return (
        <>
            <div>
                <div className="relative">
                    <img src="https://images.unsplash.com/photo-1601422407692-ec4eeec1d9b3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTAyfHxmaXRuZXNzfGVufDB8fDB8fHww" alt="" className="w-full md:h-[600px]  object-center"/>
                    <div className="absolute top-0 w-full h-full flex justify-center items-center">
                        <div className="w-full md:w-[70%] mx-auto border border-white/20 rounded-lg md:py-10 bg-black/70">
                            <h1 className="text-center text-white  text-xl md:text-3xl font-semibold">Personal Trainer</h1>
                            <p className="text-center md:w-10/12 mx-auto text-lg md:text-xl mt-3 text-white"> trainers not only focus on physical strength but also emphasize mental well-being. Their dedication fosters a culture of commitment and discipline, inspiring clients to achieve their desired fitness milestones.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex justify-center my-5">
                <Link to='/tarinerApply' className="btn">
                    <button>Trainer for Apply</button>
                </Link>
            </div>
        </>
    );
};

export default Trainer;