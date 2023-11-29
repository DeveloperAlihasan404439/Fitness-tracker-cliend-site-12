import { useEffect, useState } from "react";
import useAxios from "../../Sheard/Hooks/useAxios";
import { Link, useParams } from "react-router-dom";
import SectionTitle from "../../Sheard/SectionTitle/SectionTitle";

const ClassDetels = () => {
    const [detels, setDelets] = useState({})
    const axiosSecure = useAxios()
    const {id} = useParams()
    useEffect(()=>{
        axiosSecure.get(`/class/${id}`)
        .then(res =>{
            setDelets(res.data)
        })
    },[id,axiosSecure])
    const {photo,tranier_name,tranier_photo,tranier_email,deteles,} = detels || {}
    return (
        <div className="w-11/12 mx-auto">
            <SectionTitle heading="Class" title="Class Deteles"/>
            <div className="md:flex justify-between items-center gap-5 mb-5">
                <div className="md:w-[50%]">
                    <img src={photo} alt="" className="w-full h-[500px] rounded-lg"/>
                </div>
                <div className="md:w-[50%]">
                    <div className="flex justify-center  md:mt-5">
                        <img src={tranier_photo} alt="" className="w-[100px] h-[100px] rounded-[50%]"/>
                    </div>
                    <h1 className="text-center text-xl py-3 md:text-3xl font-semibold">{tranier_name}</h1>
                    <p  className="text-center text-lg md:text-xl ">{tranier_email}</p>
                    <h1 className="text-lg md:text-xl text-black">Detels {deteles}</h1>
                    <Link to="/tariner">
                    <button className="btn">join now</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ClassDetels;