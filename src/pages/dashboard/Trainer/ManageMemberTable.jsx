const ManageMemberTable = ({memberinfo, i}) => {
    const {user_gender,user_age,user_email,user_name} = memberinfo||{}
    return (
        <tr className="bg-base-100 border-b-2 border-black">
      <th className="w-[70px]">{i + 1}</th>
      <td className="w-[250px] text-left text-lg">{user_name}</td>
      <td className="text-lg text-black w-[350px] text-left">{user_email}</td>
      <td className="text-lg text-black text-left">{user_age}</td>
      <td className="w-full flex justify-center items-center">{user_gender}</td>
    </tr>
    );
};

export default ManageMemberTable;