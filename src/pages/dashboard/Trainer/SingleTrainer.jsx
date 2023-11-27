import { Link, useLoaderData } from "react-router-dom";

const SingleTrainer = () => {
  const loader = useLoaderData();
  const {
    trainer_photo,
    status,
    skills,
    name,
    email,
    discription,
    available_time,
    available_day,
    age,
    experience,
  } = loader;
  return (
    <div className="w-full md:w-7/12 mx-auto my-5 border-2 border-white ">
      <div className="p-10 bg-[#5b1ae9] text-white rounded-xl">
        <div className="relative flex justify-center items-center w-full">
          <img
            src={trainer_photo}
            alt=""
            className="w-[200px] h-[200px] border rounded-[50%]"
          />
          <div className="absolute -top-10 -right-10">
            <Link to="/tariner">
              <button className="btn uppercase">Back the Prv</button>
            </Link>
          </div>
        </div>
        <h1 className="text-center text-xl md:text-3xl font-semibold">
          Name : {name}
        </h1>
        <h1 className="text-center text-xl md:text-2xl font-semibold">
          Email : {email}
        </h1>
        <h1 className="text-lg md:text-xl">Age : {age}</h1>
        <h1 className="text-lg md:text-xl">
          Experience : {experience ? experience : "12"} Year
        </h1>
        <h1 className="text-lg md:text-xl">
          Experience : {experience ? experience : "12"} Year
        </h1>
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
  );
};

export default SingleTrainer;
