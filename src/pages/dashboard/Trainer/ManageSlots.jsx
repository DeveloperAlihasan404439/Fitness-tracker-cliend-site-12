import { useEffect, useState } from "react";
import useAuth from "../../../Sheard/Hooks/useAuth";
import useAxios from "../../../Sheard/Hooks/useAxios";
import SectionTitle from "../../../Sheard/SectionTitle/SectionTitle";

const ManageSlots = () => {
    const axiosSecure = useAxios()
    const [tranierClass, setTranierClass] = useState([]);
    const {user} = useAuth()
    useEffect(() => {
        axiosSecure.get(`/tarinerApply/class/${user.email}`).then((res) => {
            setTranierClass(res.data);
      });
    }, [user,axiosSecure]);
    return (
        <div className=" bg-[#e3e5e9] pb-10">
      <SectionTitle heading="Slots" title="Manges All Slots" />
      <div className="w-11/12 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {tranierClass?.map((tranierClass) => (
          <div key={tranierClass._id} className="bg-white rounded-xl">
            <div className="flex flex-col max-w-lg h-full p-6 space-y-6 overflow-hidden rounded-lg shadow-md dark:bg-gray-900 dark:text-gray-100">
              <div className="flex space-x-4">
                <img
                  alt=""
                  src={tranierClass?.tranier_photo}
                  className="object-cover w-12 h-12 rounded-full shadow dark:bg-gray-500"
                />
                <div className="flex flex-col space-y-1">
                  <a
                    rel="noopener noreferrer"
                    href="#"
                    className="text-lg font-semibold uppercase"
                  >
                    {tranierClass.tranier_name}
                  </a>
                  <span className="text-xs dark:text-gray-400">
                    {tranierClass.tranier_email}
                  </span>
                </div>
              </div>
              <div>
                <img
                  src={tranierClass.photo}
                  alt=""
                  className="object-cover w-full mb-4 h-52 dark:bg-gray-500 rounded"
                />
                <h1 className="mb-1 text-xl font-semibold">
                  {tranierClass.class_name}
                </h1>
                <div className="flex justify-between text-black py-2">
                    <h1>Time : {tranierClass.values}</h1>
                    {tranierClass.items?.map((item, i) =><h1 key={i}>Price : ${item.price}</h1>)}
                </div>
                <p className="text-sm dark:text-gray-400">{tranierClass.deteles}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
    );
};

export default ManageSlots;