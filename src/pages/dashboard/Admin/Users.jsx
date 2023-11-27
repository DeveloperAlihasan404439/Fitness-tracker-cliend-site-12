import { Helmet } from "react-helmet";
import SectionTitle from "../../../Sheard/SectionTitle/SectionTitle";
import useUsers from "../../../Sheard/Hooks/useUsers";
import useAxios from "../../../Sheard/Hooks/useAxios";

const Users = () => {
  const { users, refetch } = useUsers();
  const axiosSecure = useAxios();

  const hendelAdmin = (id) => {
    axiosSecure.put(`/users?id=${id}`).then((res) => {
      if (res.data.modifiedCount) {
      }
    });
  };
  return (
    <>
      <Helmet>
        <title>Body Pulse | All Users</title>
      </Helmet>
      <SectionTitle heading="User" title=" All Users" />

      <div className="w-11/12 mx-auto overflow-x-auto border-x-2  rounded-t-[30px]">
        <table className="table">
          <thead>
            <tr className="w-full bg-[#5b1ae9] text-white ">
              <th></th>
              <th className="text-xl">NAME</th>
              <th className="text-xl">EMAIL</th>
              <th className="text-xl text-center">Admin</th>
              <th className="text-xl flex-1 text-center">Trainer</th>
            </tr>
          </thead>
          <tbody>
            {users?.map((user, i) => (
              <tr
                key={user._id}
                className="bg-base-100 border-b-2 border-black"
              >
                <th className="w-[30px]">{i + 1}</th>
                <td className="w-[250px] text-left text-lg">{user.name}</td>
                <td className="text-lg text-black w-[350px] text-left">
                  {user.email}
                </td>
                <td className=" text-center">
                  {user.rol === "admin" ? 
                    <button
                      className="w-11/12 mx-auto py-2 text-lg rounded-xl bg-orange-600 text-black">
                        Admin</button>
                        :<button onClick={() => hendelAdmin(user._id)} className="w-11/12 mx-auto py-2 text-lg rounded-xl bg-[#5b1ae9] text-white">
                          Make Admin
                        </button>
                        }
                </td>
                <td className=" text-center">
                  {user.rol === "trainer" ? 
                    <button
                      className="w-11/12 mx-auto py-2 text-lg rounded-xl bg-orange-600 text-black">
                        Trainer</button>
                        :<button onClick={() => hendelAdmin(user._id)} className="w-11/12 mx-auto py-2 text-lg rounded-xl bg-[#5b1ae9] text-white">
                          Make Trainer
                        </button>
                        }
                </td>

              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Users;
