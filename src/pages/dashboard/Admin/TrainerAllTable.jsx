const TrainerAllTable = ({tariner,i}) => {
    const {email,name,age} = tariner;
    return (
        <tr className="bg-base-100 border-b-2 border-black">
      <th className="w-[70px]">{i + 1}</th>
      <td className="w-[250px] text-left text-lg">{name}</td>
      <td className="text-lg text-black w-[350px] text-left">{email}</td>
      <td className="text-lg text-black text-left">{age}</td>
      <td className="w-full flex justify-center items-center h-full ">
        <button className="bg-[#5b1ae9] text-white pb-2 px-6 text-3xl rounded-xl">pay </button>
      </td>
    </tr>
    );
};

export default TrainerAllTable;