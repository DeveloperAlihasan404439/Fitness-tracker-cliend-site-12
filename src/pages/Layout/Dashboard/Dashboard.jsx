import { Helmet } from "react-helmet";
import { NavLink, Outlet } from "react-router-dom";
import { MdMenuBook,MdOutlinePadding  } from 'react-icons/md';
import { FaHome,FaUsers } from "react-icons/fa";
import { GrGallery } from "react-icons/gr";
import { SiGoogleclassroom ,SiSubstack} from "react-icons/si";
import { FaHandHoldingDollar,FaShareFromSquare,FaUserTie  } from "react-icons/fa6";
import { TbActivity  } from "react-icons/tb";
import { ImProfile  } from "react-icons/im";
import useAdmin from "../../../Sheard/Hooks/useAdmin";
import useTrainer from "../../../Sheard/Hooks/useTrainer";
const Dashboard = () => {
  const {isAdmin} = useAdmin();
  const {isTrainer} = useTrainer()
  return (
    <>
      <Helmet>
        <title>Bistro Boss | Dashboard</title>
      </Helmet>
      <div className="flex ">
        <div className="drawer lg:drawer-open">
          <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
          <div className=" drawer-content">
            <label
              htmlFor="my-drawer-2"
              className="w-full pt-5 pr-5 flex justify-end drawer-content lg:hidden"
            >
            <MdMenuBook className="text-3xl" />
            </label>
            <Outlet />
          </div>
          <div className="drawer-side">
            <label
              htmlFor="my-drawer-2"
              aria-label="close sidebar"
              className="drawer-overlay"
            ></label>
              <div className="menu px-5 bg-[#5b1ae9] h-screen">
                <h1 className="text-3xl text-center text-white mt-10  mb-5">
                  {
                    isAdmin || isTrainer?isAdmin?'Admin Dashbord':"Trainer Dashbord":'Member Dashbord'
                  }
                  </h1>
              
              <ul className="w-75 md:w-80 pb-2 text-white ">
                {isAdmin || isTrainer? <>
                {
                  isAdmin?<>
                  {/* admin Dashboard  */}
                    <NavLink
                      to="/dashboard/subscribers"
                      className="flex gap-5 items-center text-lg mb-2"
                    >
                      <SiSubstack/>
                      <h1>All subscribers</h1>
                    </NavLink>
                    <NavLink
                      to="/dashboard/allTrainers"
                      className="flex gap-5 items-center text-lg mb-2"
                    >
                      <FaUsers/>
                      <h1>All Trainers</h1>
                    </NavLink>
                    <NavLink
                      to="/dashboard/appliedTrainer"
                      className="flex gap-5 items-center text-lg mb-2"
                    >
                      <MdOutlinePadding />
                      <h1>Applied Trainer</h1>
                    </NavLink>
                    <NavLink
                      to="/dashboard/allusers"
                      className="flex gap-5 items-center text-lg mb-2"
                    >
                      <FaUserTie />
                      <h1>All Users</h1>
                    </NavLink>
                    <NavLink
                      to="/dashboard/menageBooking"
                      className="flex gap-5 items-center text-lg mb-2"
                    >
                      <FaHandHoldingDollar/>
                      <h1>Balance</h1>
                    </NavLink>
                  </>:<>
                  {/* trainer Dashbord  */}
                    <NavLink
                      to="/dashboard/subscribers"
                      className="flex gap-5 items-center text-lg mb-2"
                    >
                      <SiSubstack/>
                      <h1>Manage Slots</h1>
                    </NavLink>
                    <NavLink
                      to="/dashboard/allTrainers"
                      className="flex gap-5 items-center text-lg mb-2"
                    >
                      <FaUsers/>
                      <h1>Manage member</h1>
                    </NavLink>
                    <NavLink
                      to="/dashboard"
                      className="flex gap-5 items-center text-lg mb-2"
                    >
                      <FaShareFromSquare />
                      <h1>Add new Forum</h1>
                    </NavLink>
                    <NavLink
                      to="/dashboard/addNowClass"
                      className="flex gap-5 items-center text-lg mb-2"
                    >
                      <SiGoogleclassroom />
                      <h1>Add new Class</h1>
                    </NavLink>
                  </>
                }
                </> : (
                  <>
                  {/* user Dashboard  */}
                    <NavLink
                      to="/dashboard/userHome"
                      className="flex gap-5 items-center text-lg mb-2"
                    ><TbActivity />
                      <h1>Activity Log</h1>
                    </NavLink>
                    <NavLink
                      to="/dashboard/profile"
                      className="flex gap-5 items-center text-lg mb-2"
                    ><ImProfile />
                      <h1>Profile Settings</h1>
                    </NavLink>
                    <NavLink
                      to="/dashboard/paymentHistroy"
                      className="flex gap-5 items-center text-lg mb-2"
                    >
                      <SiGoogleclassroom/>
                      <h1>Recommended</h1>
                    </NavLink>
                    <NavLink
                      to="/dashboard/myCrat"
                      className="flex gap-5 items-center text-lg mb-2"
                    >
                      <h1>my cart</h1>
                    </NavLink>
                    <NavLink className="flex gap-5 items-center text-lg mb-2">
                      <h1>add review</h1>
                    </NavLink>
                  </>
                )}
              </ul>
              <h1 className="border-2 border-white my-3"></h1>
              <ul className="w-75 md:w-80 px-1 text-white">
                <NavLink
                  to="/"
                  className="flex gap-5 items-center text-lg mb-2"
                ><FaHome/>
                  <h1>Home</h1>
                </NavLink>
                <NavLink
                  to='/gallery'
                  className="flex gap-5 items-center text-lg mb-2"
                >
                  <GrGallery/>
                  Gallery
                </NavLink>
                <NavLink
                  to="/classes"
                  className="flex gap-5 items-center text-lg mb-2"
                >
                  <SiGoogleclassroom/>
                  <h1>Classes</h1>
                </NavLink>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
