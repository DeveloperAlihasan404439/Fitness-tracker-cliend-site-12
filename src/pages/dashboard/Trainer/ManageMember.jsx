import { useEffect } from "react";
import { useState } from "react";
import useAuth from "../../../Sheard/Hooks/useAuth";
import useAxios from "../../../Sheard/Hooks/useAxios";
import SectionTitle from "../../../Sheard/SectionTitle/SectionTitle";
import ManageMemberTable from "./ManageMemberTable";

const ManageMember = () => {
    const [member, setMember] = useState()
    const axiosSecure = useAxios()
    const {user} = useAuth()
    useEffect(()=>{
        axiosSecure.get(`userBooking/member/list?email=${user.email}`)
        .then(res =>{
            setMember(res.data)
        })
    },[user,axiosSecure])
    console.log(member)
    return (
        <div className="w-11/12 mx-auto">
            <SectionTitle heading="Member" title="Manage All Member" />
            <div className="w-10/12 mx-auto overflow-x-auto border-x-2  rounded-t-[30px]">
          <table className="table">
            <thead>
              <tr className="w-full bg-[#5b1ae9] text-white ">
                <th></th>
                <th className="text-xl">NAME</th>
                <th className="text-xl">EMAIL</th>
                <th className="text-xl">Age</th>
                <th className="text-xl flex-1 text-center">Gender</th>
              </tr>
            </thead>
            <tbody>
              {member?.map((memberinfo, i) => (
                <ManageMemberTable
                  key={i}
                  memberinfo={memberinfo}
                  i={i}
                />
              ))}
            </tbody>
          </table>
        </div>
        </div>
    );
};

export default ManageMember;