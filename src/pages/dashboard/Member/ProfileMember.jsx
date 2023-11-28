import { Link } from "react-router-dom";
import useAuth from "../../../Sheard/Hooks/useAuth";
import useUsers from "../../../Sheard/Hooks/useUsers";
import { FaRegEdit } from "react-icons/fa";
const ProfileMember = () => {
  const { user } = useAuth();
  const { usersData } = useUsers();
  const singleUser = usersData.find(
    (singleUser) => singleUser.email === user?.email
  );
  console.log(singleUser);
  const { name, email, photo, phone, location, age, gender } = singleUser || {};
  return (
    <div className="bg-[#321572] min-h-screen ">
      <div className="w-10/12 mx-auto pt-8 flex justify-between">
        <Link to="/dashboard/profileEdit">
          <h1 className="text-white text-3xl font-medium">My Profile</h1>
        </Link>
        <Link to="/dashboard/profileEdit">
          <h1 className="text-white text-3xl font-medium">
            <FaRegEdit />
          </h1>
        </Link>
      </div>
      <div className="md:w-8/12 mx-auto flex flex-col  justify-center items-center h-[80vh]">
        <div className="bg-white p-10 rounded-lg">
        <div className="flex justify-center">
          <img
            src={
              photo
                ? photo
                : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwnYnwftDUSjsQmLQvMBZ2pwDXhAJiIdfKvg&usqp=CAU"
            }
            alt=""
            className="w-[150px] h-[150px] rounded-[50%]"
          />
        </div>
        <div className="text-black mt-5">
          <h1 className="text-xl md:text-2xl font-medium text-center">
            {name}
          </h1>
          <h1 className="text-lg md:text-lg font-normal text-center">
            {" "}
            {email}
          </h1>
          <div className="flex gap-5 pt-5">
            <div>
              
              <h1 className="text-lg md:text-lg font-normal">
                Age : {age ? age : ""} year
              </h1>
              <h1 className="text-lg md:text-lg font-normal">
                Phone : {phone ? phone : ""}
              </h1>
            </div>
            <div>
              <h1 className="text-lg md:text-lg font-normal">
                Gender : {gender ? gender : ""}
              </h1>
              <h1 className="text-lg md:text-lg font-normal">
                Location : {location ? location : ""}
              </h1>
            </div>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileMember;
