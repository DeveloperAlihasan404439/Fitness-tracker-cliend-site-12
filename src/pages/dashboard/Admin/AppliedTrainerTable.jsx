import { FaEye } from "react-icons/fa";

const AppliedTrainerTable = ({ tariner, i, refetch }) => {
  const {
    name,
    email,
    status,
    age,
    available_day,
    available_time,
    discription,
    skills,
    trainer_photo,
  } = tariner;
  return (
    <tr className="bg-base-100 border-b-2 border-black">
      <th className="w-[70px]">{i + 1}</th>
      <td className="w-[250px] text-left text-lg">{name}</td>
      <td className="text-lg text-black w-[350px] text-left">{email}</td>
      <td className="text-lg text-black text-left">{status}</td>
      <td className="w-full flex justify-center items-center">
        <div
          onClick={() => document.getElementById("my_modal_4").showModal()}
          className="w-20 h-10 flex justify-center items-center bg-[#5b1ae9] text-white text-4xl rounded-lg text-center"
        >
          <FaEye />
        </div>
        <dialog id="my_modal_4" className="modal ">
          <div className="modal-box w-11/12 max-w-5xl bg-black/90 text-white border-2 border-white">
            <div className="w-full flex justify-center items-center gap-8">
              <img
                src={trainer_photo}
                alt=""
                className="w-[200px] h-[200px] rounded-[50%]"
              />
              <div>
                <h1 className="text-3xl font-medium">Name : {name}</h1>
                <h1 className="text-xl font-medium py-2">Email : {email}</h1>
                <h1 className="text-xl font-medium pb-2">Age : {age} year</h1>
                <div className="flex justify-between gap-10 mt-5">
                  <div>
                    <h1 className="text-2xl text-orange-600 font-semibold pb-4">
                      Available day
                    </h1>
                    {available_day?.map((day, index) => (
                      <div key={index}>
                        <h1 className="text-xl font-medium pb-1">
                          <span>{index + 1}</span> Perday : {day}{" "}
                        </h1>
                      </div>
                    ))}
                  </div>
                  <div>
                    <h1 className="text-2xl text-orange-600 font-semibold pb-4">
                    Ailable Slot.
                    </h1>
                    { available_time?.map((day, index) => (
                      <div key={index}>
                        <h1 className="text-xl font-medium pb-1">
                          <span>{index + 1}</span> Slot. : {day}{" "}
                        </h1>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="flex flex-wrap gap-5 pt-5 mt-5 justify-center">
              {
              skills.map((skils, index)=><div key={index}>
                <h1 className="text-xl font-medium pb-1">
                          <span>{index + 1} - </span> Skill : {skils}{" "}
                        </h1>
              </div>)
              }
              </div>
                <p className="text-lg text-center w-10/12 mx-auto">{discription}</p>
            </div>
            <div  className="flex  justify-center items-center">
              <button className="btn text-2xl font-medium uppercase">confirmation</button>
              <button className="btn  text-2xl font-medium uppercase">reject</button>
            <form method="dialog">
              <button className="btn m-0">Close</button>
            </form>
            </div>
          </div>
        </dialog>
      </td>
    </tr>
  );
};

export default AppliedTrainerTable;
