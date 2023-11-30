import { useEffect } from "react";
import useAxios from "../../../Sheard/Hooks/useAxios";
import SectionTitle from "../../../Sheard/SectionTitle/SectionTitle";
import { useState } from "react";
import moment from "moment";
moment().format();
const Balance = () => {
  const axiosSecure = useAxios();
  const [balance, setBalance] = useState([])
  useEffect(() => {
    axiosSecure.get("/payment/data").then((res) => setBalance(res.data));
  }, [axiosSecure]);
  const totalPrice = balance?.reduce(
    (total, item) => total + parseInt(item.price),
    0
  );
  console.log(totalPrice)
  return (
    <div>
      <section>
        <div className="container mx-auto">
          <SectionTitle heading="Balane" title="Totle Balance"/>
          <div className="w-10/12 mx-auto grid gap-6 lg:grid-cols-2">
            <div className="flex flex-col p-8 space-y-4 rounded-md bg-[#1F2937] text-white">
              <div className="flex items-center flex-shrink-0 text-xl font-bold rounded-full">
                Member Balance  :  <span className="text-orange-500">  {" "}${totalPrice}</span>
              </div>
            </div>
            <div className="flex flex-col p-8 space-y-4 rounded-md bg-[#1F2937] text-white">
              <div className="flex items-cente flex-shrink-0 text-xl font-bold rounded-full">
                Totle Balance
              </div>
            </div>
          </div>
          <div className="w-11/12 mx-auto mt-5 overflow-x-auto border-x-2  rounded-t-[30px]">
            <table className="table">
              <thead>
                <tr className="w-full bg-[#5b1ae9] text-white ">
                  <th></th>
                  <th className="text-xl">NAME</th>
                  <th className="text-xl">EMAIL</th>
                  <th className="text-xl">Price</th>
                  <th className="text-xl flex-1 text-center">Day</th>
                </tr>
              </thead>
              <tbody>
                {balance?.map((tariner, i) => (
                  <tr key={i} className="bg-base-100 border-b-2 border-black">
                    <th className="w-[50px]">{i + 1}</th>
                    <td className="w-[200px] text-left text-lg">
                      {tariner.tranier_name}
                    </td>
                    <td className="text-lg text-black w-[300px] text-left">
                      {tariner.tranier_email}
                    </td>
                    <td className="text-lg text-black text-left">
                      {tariner.price}
                    </td>
                    <td className="text-lg text-black text-center flex-1">
                      {moment(tariner.date).format("ddd, MMM YYYY")}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Balance;
