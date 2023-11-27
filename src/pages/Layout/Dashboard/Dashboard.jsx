import { Helmet } from "react-helmet";
import { NavLink, Outlet } from "react-router-dom";
import { MdMenuBook,MdOutlinePadding  } from 'react-icons/md';
import { FaHome,FaUsers } from "react-icons/fa";
import { GrGallery } from "react-icons/gr";
import { SiGoogleclassroom ,SiSubstack} from "react-icons/si";
import { FaHandHoldingDollar,FaUserTie  } from "react-icons/fa6";
import useAdmin from "../../../Sheard/Hooks/useAdmin";
const Dashboard = () => {
  const {isAdmin} = useAdmin();
  console.log(isAdmin)
  // const isAdmin = true;
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
                <h1 className="text-3xl text-center text-white uppercase mt-10 mb-5">Dashbord</h1>
              
              <ul className="w-75 md:w-80 pb-2 text-white ">
                {isAdmin ? (
                  <>
                    <NavLink
                      to="/dashboard/subscribers"
                      className="flex gap-5 items-center text-xl uppercase mb-2"
                    >
                      <SiSubstack/>
                      <h1>All subscribers</h1>
                    </NavLink>
                    <NavLink
                      to="/dashboard/allTrainers"
                      className="flex gap-5 items-center text-xl uppercase mb-2"
                    >
                      <FaUsers/>
                      <h1>All Trainers</h1>
                    </NavLink>
                    <NavLink
                      to="/dashboard/appliedTrainer"
                      className="flex gap-5 items-center text-xl uppercase mb-2"
                    >
                      <MdOutlinePadding />
                      <h1>Applied Trainer</h1>
                    </NavLink>
                    <NavLink
                      to="/dashboard/allusers"
                      className="flex gap-5 items-center text-xl uppercase mb-2"
                    >
                      <FaUserTie />
                      <h1>All Users</h1>
                    </NavLink>
                    <NavLink
                      to="/dashboard/menageBooking"
                      className="flex gap-5 items-center text-xl uppercase mb-2"
                    >
                      <FaHandHoldingDollar/>
                      <h1>Balance</h1>
                    </NavLink>
                  </>
                ) : (
                  <>
                    <NavLink
                      to="/dashboard/userHome"
                      className="flex gap-5 items-center text-xl uppercase mb-2"
                    >
                      <h1>User Home</h1>
                    </NavLink>
                    <NavLink
                      to="/dashboard/payment"
                      className="flex gap-5 items-center text-xl uppercase mb-2"
                    >
                      <h1>reservation</h1>
                    </NavLink>
                    <NavLink
                      to="/dashboard/paymentHistroy"
                      className="flex gap-5 items-center text-xl uppercase mb-2"
                    >
                      <h1>payment history</h1>
                    </NavLink>
                    <NavLink
                      to="/dashboard/myCrat"
                      className="flex gap-5 items-center text-xl uppercase mb-2"
                    >
                      <h1>my cart</h1>
                    </NavLink>
                    <NavLink className="flex gap-5 items-center text-xl uppercase mb-2">
                      <h1>add review</h1>
                    </NavLink>
                    <NavLink className="flex gap-5 items-center text-xl uppercase mb-4">
                      <h1>my booking</h1>
                    </NavLink>
                  </>
                )}
              </ul>
              <h1 className="border-2 border-white my-3"></h1>
              <ul className="w-75 md:w-80 px-1 text-white">
                <NavLink
                  to="/"
                  className="flex gap-5 items-center text-xl uppercase mb-2"
                ><FaHome/>
                  <h1>Home</h1>
                </NavLink>
                <NavLink
                  to='/gallery'
                  className="flex gap-5 items-center text-xl uppercase mb-2"
                >
                  <GrGallery/>
                  Gallery
                </NavLink>
                <NavLink
                  to="/classes"
                  className="flex gap-5 items-center text-xl uppercase mb-2"
                >
                  <SiGoogleclassroom/>
                  <h1>Classes</h1>
                </NavLink>
              </ul>
            </div>
          </div>
        </div>
        {/* <div className="flex-1 w-11/12 mx-auto">
          
        </div> */}
      </div>
    </>
  );
};

export default Dashboard;
