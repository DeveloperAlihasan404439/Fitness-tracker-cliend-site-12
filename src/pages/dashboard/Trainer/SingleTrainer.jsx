import { Link, useLoaderData, useNavigate } from "react-router-dom";
import useAxiosPublick from "../../../Sheard/Hooks/useAxiosPublick";
import Loading from "../../../Sheard/Loading/Loading";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import useUsers from "../../../Sheard/Hooks/useUsers";
import useAuth from "../../../Sheard/Hooks/useAuth";
import Swal from "sweetalert2";

const SingleTrainer = () => {
  const [price, setPrice] = useState(null);
  const {usersData} = useUsers()
  const [items, setItems] = useState({})
  const {user} = useAuth()
  const axiosPublick = useAxiosPublick()

  const hendelProce = (price) => {
    if (price === null) {
      setPrice(price);
    } else if (price) {
      setPrice(price);
    }
  };
  const loader = useLoaderData();
  const {
    trainer_photo,
    skills,
    name,
    email,
    discription,
    available_time,
    available_day,
    age,
    experience,
  } = loader || {};
  const { data: tranierClass = [], isLoading } = useQuery({
    queryKey: ["tranierClass", email],
    queryFn: async () => {
      const { data } = await axiosPublick.get(`/tarinerApply/class/${email}`);
      return data;
    },
  });

  const hendelJoin = () => {
    const userInfo = usersData.find(users => users.email === user?.email)
    if(price ===100){
         setItems( {
        priceAmount: price,
        priceitem: "silver"
      })
    } 
    else if(price ===150){
       setItems( {
        priceAmount: price,
        priceitem: "gold"
      })
    } 
    setItems( {
      priceAmount: price,
      priceitem: "diamond"
    })
    const booking = {
      userInfo,
      trainerInfo: loader,
      class: tranierClass,
      items
    }
    console.log(booking);
    /* axiosPublick.post('/userBooking/class', booking)
    .then(res =>{
      if(res.data.insertedId){
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Successfull booking class",
          showConfirmButton: false,
          background: '#5b1ae9',
          color: '#FDFDFD',
          timer: 1500
        }); 
      }
    }) */
  };
  return (
    <div>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <div className="w-full md:w-9/12 mx-auto my-5 border-2 border-white ">
            <div className="p-10 bg-[#5b1ae9] text-white rounded-xl">
              <div className="relative flex justify-center items-center w-full">
                <img
                  src={trainer_photo}
                  alt=""
                  className="w-[200px] h-[200px] border rounded-[50%]"
                />
                <div className="absolute -top-10 -left-10">
                  <Link to="/tariner">
                    <button className="btn uppercase">Back the Prv</button>
                  </Link>
                </div>
                <div className="absolute -top-10 -right-10">
                  {price === null ? (
                  
                    <button
                      className="btn uppercase bg-slate-300"
                      disabled
                    >
                      Join Now
                    </button>
                  ) : (
                    <Link to="/dashboard/payment">
                    <button onClick={hendelJoin} className="btn uppercase">
                      Join Now
                    </button>
                    </Link>
                  )}
                </div>
              </div>
              <h1 className="text-center text-xl mt-3 md:text-3xl font-semibold">
                Name : {name}
              </h1>
              <h1 className="text-center text-xl md:text-2xl font-semibold">
                Email : {email}
              </h1>
              <div className="flex justify-between items-center mt-5">
                <div>
                  <h1 className="text-lg md:text-xl">Age : {age}</h1>
                  <h1 className="text-lg md:text-xl">
                    Experience : {experience ? experience : "12"} Year
                  </h1>
                </div>
                <div className="flex gap-5">
                  <div
                    onClick={() => hendelProce(100)}
                    className={`${
                      price === 100 ? "bg-[#ffffff]" : "bg-[#BABABA]"
                    }  text-center rounded-xl text-black py-2 px-7`}
                  >
                    <h1 className="text-xl md:text-2xl uppercase font-bold">
                      Silver
                    </h1>
                    <h1 className="text-lg md:text-xl font-medium">
                      Price : $100
                    </h1>
                  </div>
                  <div
                    onClick={() => hendelProce(150)}
                    className={`${
                      price === 150 ? "bg-[#ffffff]" : "bg-[#F5C916]"
                    } text-center rounded-xl text-black py-2 px-7`}
                  >
                    <h1 className="text-xl md:text-2xl uppercase font-bold">
                      Gold
                    </h1>
                    <h1 className="text-lg md:text-xl font-medium">
                      Price : $150
                    </h1>
                  </div>
                  <div
                    onClick={() => hendelProce(200)}
                    className={`${
                      price === 200 ? "bg-[#ffffff]" : "bg-[#b9f2ff] "
                    } text-center rounded-xl text-black py-2 px-7`}
                  >
                    <h1 className="text-xl md:text-2xl uppercase font-bold">
                      Diamond
                    </h1>
                    <h1 className="text-lg md:text-xl font-medium">
                      Price : $200
                    </h1>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 py-5">
                <div>
                  {skills?.map((skill, i) => (
                    <h1 className="text-lg" key={i}>
                      <span> {i + 1}</span> Skill : {skill}
                    </h1>
                  ))}
                </div>
                <div>
                  {available_day?.map((day, i) => (
                    <h1 className="text-lg" key={i}>
                      <span>{i + 1}</span> Day : {day}
                    </h1>
                  ))}
                </div>
                <div>
                  {available_time?.map((time, i) => (
                    <h1 className="text-lg" key={i}>
                      <span>{i + 1}</span> Time : {time}
                    </h1>
                  ))}
                </div>
              </div>
              <p className="text-lg text-center">{discription}</p>
            </div>
          </div>

          <div className="w-11/12 mx-auto grid grid-cols-1 md:grid-cols-3 gap-5 my-10">
            {tranierClass?.map((tranier) => (
              <div key={tranier._id}>
                <div className="border-2 rounded-xl">
                  <img
                    src={tranier?.photo}
                    alt=""
                    className="rounded-xl h-[400px]"
                  />
                  <div className="px-5 py-2">
                    <h1 className="text-2xl font-medium py-2 px-2 mt-2 text-black text-center">
                      Class Name : {tranier?.class_name}
                    </h1>
                    <h1 className="text-lg md:text-xl text-black">
                      Trainer Name : {tranier?.tranier_name}
                    </h1>
                    <h1 className="text-lg md:text-xl text-black">
                      Trainer Email : {tranier?.tranier_email}
                    </h1>
                    <h1 className="text-lg md:text-xl text-black">
                      Duration : {tranier?.duration}
                    </h1>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default SingleTrainer;
