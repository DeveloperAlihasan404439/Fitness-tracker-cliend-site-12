import { useEffect, useState } from "react";
import useAxios from "../../../Sheard/Hooks/useAxios";
import SectionTitle from "../../../Sheard/SectionTitle/SectionTitle";
import TrainerAllTable from "./TrainerAllTable";

const TrainerAll = () => {
    const [allTrainer, setAllTrainer] =useState([])
    const axiosSecure = useAxios()
    useEffect(()=>{
        axiosSecure.get('/confrimTariners')
        .then(res =>setAllTrainer(res.data))
    },[axiosSecure])
    return (
        <div>
            <SectionTitle heading="Trainer All" title="Confriem All Tranier"/>
            <div className="w-10/12 mx-auto overflow-x-auto border-x-2  rounded-t-[30px]">
          <table className="table">
            <thead>
              <tr className="w-full bg-[#5b1ae9] text-white ">
                <th></th>
                <th className="text-xl">NAME</th>
                <th className="text-xl">EMAIL</th>
                <th className="text-xl">STATUE</th>
                <th className="text-xl flex-1 text-center">ACTION</th>
              </tr>
            </thead>
            <tbody>
              {allTrainer?.map((tariner, i) => (
                <TrainerAllTable
                  key={i}
                  tariner={tariner}
                  i={i}
                />
              ))}
            </tbody>
          </table>
        </div>
        </div>
    );
};

export default TrainerAll;