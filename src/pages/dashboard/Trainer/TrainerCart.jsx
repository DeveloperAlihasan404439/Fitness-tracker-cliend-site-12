import { Link } from "react-router-dom";

const TrainerCart = ({ trainer }) => {
  const {
    _id,
    social,
    trainer_photo,
    available_time,
    experience,
    name,
  } = trainer;
  return (
    <div className="relative border rounded-lg border-[#5b1ae9]/60">
      <figure>
        <img
          src={trainer_photo}
          alt="Shoes"
          className="w-full rounded-t-lg h-[200px]"
        />
      </figure>
      <div className="card-body">
        <div className="flex justify-between items-start">
            
        <div>
        <h1 className="card-title text-xl">Trainer Name :{name}</h1>
        <p>Experience : {experience ? experience : "12"} year</p>
        </div>
        <img
          src={`${
            social
              ? social
              : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJTBRNbr55XLb3_Xwvv86nCnnB5v2wFw9XGw&usqp=CAU"
          }`}
          alt=""
          className="w-[50px] h-[50px] rounded-[50%]"
        />
        </div>
        {available_time?.map((time, i) => (
          <h1 key={i}>
            <span>{i + 1}</span> Available Time{time}
          </h1>
        ))}
      </div>
      <div className="mt-10">
      <Link to={`/tarinerApply/${_id}`} className="absolute bottom-0 left-0 w-full text-center bg-[#37167e] hover:bg-[#5b1ae9] py-2 rounded-b-lg text-white text-xl">Know more</Link>

      </div>
    </div>
  );
};

export default TrainerCart;
