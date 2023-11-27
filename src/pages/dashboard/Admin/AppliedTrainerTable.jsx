import { FaEye } from "react-icons/fa";

const AppliedTrainerTable = ({hendelClick, tariner, i,  }) => {
  const {
    name,
    email,
    status,
  } = tariner;

  return (
    <tr className="bg-base-100 border-b-2 border-black">
      <th className="w-[70px]">{i + 1}</th>
      <td className="w-[250px] text-left text-lg">{name}</td>
      <td className="text-lg text-black w-[350px] text-left">{email}</td>
      <td className="text-lg text-black text-left">{status}</td>
      <td  onClick={()=>hendelClick(tariner)} className="w-full flex justify-center items-center">
        <button>
        <label htmlFor="my_modal_7" className="w-20 h-10 flex justify-center items-center bg-[#5b1ae9] text-white text-4xl rounded-lg text-center"> <span>
              <FaEye />
            </span></label>
      
         
        </button>
      </td>
    </tr>
  );
};

export default AppliedTrainerTable;
