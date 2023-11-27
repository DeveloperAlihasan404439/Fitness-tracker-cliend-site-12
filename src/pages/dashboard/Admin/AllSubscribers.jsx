import { Helmet } from "react-helmet";
import SectionTitle from "../../../Sheard/SectionTitle/SectionTitle";
import { useEffect, useState } from "react";
import useAxios from "../../../Sheard/Hooks/useAxios";

const AllSubscribers = () => {
    const [subscribers, setSubscribers] = useState([])
    const axiosSecure = useAxios()
    useEffect(()=>{
      axiosSecure.get('/subscribers')
        .then(res =>setSubscribers(res.data))
    },[axiosSecure])

    return (
        <>
            <Helmet>
                <title>Body Pulse | Subsvribers</title>
            </Helmet>
            <SectionTitle heading='Subscribers' title="All Subscribers Users"/>
            <div className="w-8/12 mx-auto overflow-x-auto rounded-t-xl">
          <table className="table">
            <thead>
              <tr className="w-full bg-[#5b1ae9] text-white ">
                <th></th>
                <th className="text-xl">NAME</th>
                <th className="text-xl">EMAIL</th>
              </tr>
            </thead>
            <tbody>
                {
                    subscribers?.map((subscriber, i) => <tr key={i} className="bg-base-100 border-b-2 border-black">
                    <th className="w-[100px]">{i + 1}</th>
                    <td className="w-[250px] text-left text-lg">{subscriber.name}</td>
                    <td className="text-lg text-black w-[400px] text-left">{subscriber.email}</td>
                    
                  </tr>)
                }
            </tbody>
          </table>
        </div>
        </>
    );
};

export default AllSubscribers;