import { Link, useLoaderData, useNavigate } from "react-router-dom";
import useAxiosPublick from "../../../Sheard/Hooks/useAxiosPublick";
import Loading from "../../../Sheard/Loading/Loading";
import { useQuery } from "@tanstack/react-query";
import Swal from "sweetalert2";
import useUsers from "../../../Sheard/Hooks/useUsers";
import useAuth from "../../../Sheard/Hooks/useAuth";

const SingleTrainer = () => {
  const {usersData} = useUsers()
  const {user} = useAuth()
  const axiosPublick = useAxiosPublick()
  const navigaate = useNavigate()
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
  const userInformation = usersData.find(userinfo => userinfo.email === user.email)
  const hendelJoin = (id) => {
    const bookingClass = tranierClass.find(bookingClass => bookingClass._id === id)
    const booking={
        id: id,
        values:bookingClass.values,
        tranier_photo: bookingClass.tranier_photo,
        tranier_name: bookingClass.tranier_name,
        tranier_email: bookingClass.tranier_email,
        photo: bookingClass.photo,
        items: bookingClass.items,
        class_name: bookingClass.class_name,
        deteles: bookingClass.deteles,
        user_name: userInformation.name,
        user_age: userInformation.age,
        user_email: userInformation.email,
        user_phone: userInformation.phone,
        user_gender: userInformation.gender,
        user_location: userInformation.location,
      }
    axiosPublick.post('/userBooking/class', booking)
    .then(res =>{
      if(res.data.insertedId){
        navigaate(`/dashboard/payment/${id}`)
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Successfull booking class",
          showConfirmButton: false,
          background: '#5b1ae9',
          color: '#FDFDFD',
          timer: 2000
        }); 
      }
    })
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
              </div>
              <h1 className="text-center text-xl mt-3 md:text-3xl font-semibold">
                Name : {name}
              </h1>
              <h1 className="text-center text-xl md:text-2xl font-semibold">
                Email : {email}
              </h1>
                <div>
                  <h1 className="text-lg md:text-xl">Age : {age}</h1>
                  <h1 className="text-lg md:text-xl">
                    Experience : {experience ? experience : "12"} Year
                  </h1>
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
                    className="rounded-t-xl h-[400px] w-full"
                  />
                  <div className="px-5 py-2">
                    <h1 className="text-2xl font-medium py-2 px-2 mt-2 text-black text-center">
                      {tranier?.class_name}
                    </h1>
                    <h1 className="text-xl font-medium text-black text-center">
                     Tiem : {tranier?.values}
                    </h1>
                      {
                     tranier?.items.map((items, i)=><div key={i} className="flex justify-between px-5 py-2 items-center">
                      <h1 className={`text-xl font-medium ${items.item==="Sliver"|| items.item ==="Gold"?items.item==="Gold"?"bg-[#F7D000]":"bg-[#5a5a5a]":"bg-[#27c3e6]"} text-white  px-5 py-2 rounded-xl`}>{items.item}</h1>
                      <h1 className={`text-xl font-medium ${items.item==="Sliver"|| items.item ==="Gold"?items.item==="Gold"?"bg-[#F7D000]":"bg-[#5a5a5a]":"bg-[#27c3e6]"} text-white  px-5 py-2 rounded-xl`}>price ${items.price}</h1>
                     </div>)
                      }
                      <div className="flex justify-center">
                    <button onClick={()=>hendelJoin(tranier._id)} className="btn uppercase">
                      Join Now
                    </button>
                    </div>
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
