import { CiHeart } from "react-icons/ci";
import { FaHotjar, FaUserFriends } from "react-icons/fa";
import { FaEye } from "react-icons/fa6";
import { LiaCertificateSolid } from "react-icons/lia";
import { LiaMapMarkerSolid } from "react-icons/lia";
function Experience() {
  return (
    <div className="w-11/12 max-w-[90%] mx-auto mt-14">
      <div className="w-full flex flex-col justify-center items-center">
        <h2 className="bg-transparent text-center text-2xl font-bold">
          Experience of Yoga
        </h2>
        <img
          src="https://yoga-fit.cmsmasters.net/wp-content/uploads/2015/04/ornament.png"
          alt=""
          className="w-16 h-14"
        />
        <p className="px-10 text-center text-lg  mb-10">
          Yoga Fit is where you can find balance, harmony and energy renewal
          amidst the hectic bustle of everyday pressures and deadlines. Relax &
          enjoy a personalized day yoga experience in our comfortable sanctuary.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 items-center">
        <div>
          <div className="flex gap-4 md:flex-row-reverse mt-5">
            <div className="flex justify-center items-center text-[#FFF] w-24 h-16 mt-4">
              <span className="text-3xl m-3 border-white p-4 bg-blue-500 rounded-full transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover:bg-blue-600 duration-300">
                <CiHeart />
              </span>
            </div>
            <div>
              <h3 className="bg-transparent text-xl font-medium tracking-[2px] text-right">
                Balance Body &amp; Mind
              </h3>
              <p className="text-right text-lg">
                Cum sociis natoque penatibus et magnis dis parturient montesmus.
                Pro vel nibh et elit
              </p>
            </div>
          </div>
          <div className="flex gap-4 md:flex-row-reverse mt-5">
            <div className="flex justify-center items-center text-[#FFF] w-24 h-16 mt-4">
              <span className="text-3xl m-3 border-white p-4 bg-[#ce427d] rounded-full transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover:bg-[#d03777] duration-300 rotate-[180deg]">
                <LiaMapMarkerSolid />
              </span>
            </div>
            <div>
              <h3 className="bg-transparent text-xl font-medium tracking-[2px] text-right">
                Healthy Daily Life
              </h3>
              <p className="text-right text-lg">
                Cum sociis natoque penatibus et magnis dis parturient montesmus.
                Pro vel nibh et elit
              </p>
            </div>
          </div>
          <div className="flex gap-4 md:flex-row-reverse mt-5">
            <div className="flex justify-center items-center text-[#FFF] w-24 h-16 mt-4">
              <span className="text-3xl m-3 p-4 bg-[#fd996e] rounded-full transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover:bg-[#f68656] duration-300">
                <FaHotjar />
              </span>
            </div>
            <div>
              <h3 className="bg-transparent text-xl font-medium tracking-[2px] text-right">
                Healthy Daily Life
              </h3>
              <p className="text-right text-lg">
                Cum sociis natoque penatibus et magnis dis parturient montesmus.
                Pro vel nibh et elit
              </p>
            </div>
          </div>
        </div>
        <div className="cmsms_column one_third">
          <div
            className="cmsms_img cmsms_image_n fadeIn animated"
            data-animation="fadeIn"
            data-delay="400"
          >
            <img
              decoding="async"
              src="https://yoga-fit.cmsmasters.net/wp-content/uploads/2015/04/shiva-6.jpg"
            />
          </div>
        </div>
        <div>
          <div className="flex gap-4 mt-5">
            <div className="flex justify-center items-center text-[#FFF] w-24 h-16 mt-4">
              <span className="text-3xl m-3 border-white p-4 bg-[#ffc472] rounded-full transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover:bg-[#f6b862] duration-300">
                <FaEye />
              </span>
            </div>
            <div>
              <h3 className="bg-transparent text-xl font-medium tracking-[2px] ">
                Meditation Practice
              </h3>
              <p className=" text-lg">
                Cum sociis natoque penatibus et magnis dis parturient montesmus.
                Pro vel nibh et elit
              </p>
            </div>
          </div>
          <div className="flex gap-4 mt-5">
            <div className="flex justify-center items-center text-[#FFF] w-24 h-16 mt-4">
              <span className="text-3xl m-3 border-white p-4 bg-[#53dae6] rounded-full transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover:bg-[#3fbdc9] duration-300">
              <LiaCertificateSolid />
              </span>
            </div>
            <div>
              <h3 className="bg-transparent text-xl font-medium tracking-[2px] ">
                Yoga Month Challenge
              </h3>
              <p className=" text-lg">
                Cum sociis natoque penatibus et magnis dis parturient montesmus.
                Pro vel nibh et elit
              </p>
            </div>
          </div>
          <div className="flex gap-4 mt-5">
            <div className="flex justify-center items-center text-[#FFF] w-24 h-16 mt-4">
              <span className="text-3xl m-3 border-white p-4 bg-[#4fb3e9] rounded-full transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover:bg-[#48a6d8] duration-300">
                <FaUserFriends />
              </span>
            </div>
            <div>
              <h3 className="bg-transparent text-xl font-medium tracking-[2px] ">
                Yoga Month Challenge
              </h3>
              <p className=" text-lg">
                Cum sociis natoque penatibus et magnis dis parturient montesmus.
                Pro vel nibh et elit
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Experience;
