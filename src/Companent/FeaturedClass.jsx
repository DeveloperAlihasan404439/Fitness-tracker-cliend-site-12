import { useEffect, useState } from "react";
import useAxiosPublick from "../Sheard/Hooks/useAxiosPublick";
import SectionTitle from "../Sheard/SectionTitle/SectionTitle";

const FeaturedClass = () => {
  const axiosPublick = useAxiosPublick();
  const [featured, setFeatured] = useState([]);
  useEffect(() => {
    axiosPublick.get("featured/class").then((res) => {
      setFeatured(res.data);
    });
  }, [axiosPublick]);
  return (
    <div className="bg-gray-300 pb-10">
      <SectionTitle heading="Featured" title="Featured  Class" />
      <div className="w-11/12 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {featured?.map((featur) => (
          <div key={featur._id} className="bg-white rounded-xl">
            <div className="flex flex-col max-w-lg p-6 space-y-6 overflow-hidden rounded-lg shadow-md dark:bg-gray-900 dark:text-gray-100">
              <div className="flex space-x-4">
                <img
                  alt=""
                  src={featur?.tranier_photo}
                  className="object-cover w-12 h-12 rounded-full shadow dark:bg-gray-500"
                />
                <div className="flex flex-col space-y-1">
                  <a
                    rel="noopener noreferrer"
                    href="#"
                    className="text-sm font-semibold"
                  >
                    {featur.tranier_name}
                  </a>
                  <span className="text-xs dark:text-gray-400">
                    {featur.tranier_email}
                  </span>
                </div>
              </div>
              <div>
                <img
                  src={featur.photo}
                  alt=""
                  className="object-cover w-full mb-4 h-52 dark:bg-gray-500 rounded"
                />
                <h1 className="mb-1 text-xl font-semibold">
                  {featur.class_name}
                </h1>
                <p className="text-sm dark:text-gray-400">{featur.deteles}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedClass;
