import { Helmet } from "react-helmet";
import { NavLink, Outlet } from "react-router-dom";

const Dashboard = () => {
  const isAdmin = true;
  return (
    <>
      <Helmet>
        <title>Bistro Boss | Dashboard</title>
      </Helmet>
      <div className="flex ">
        <div className="drawer lg:drawer-open">
          <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
          <div className="w-full flex justify-end drawer-content lg:hidden">
            {/* Page content here */}
            <label
              htmlFor="my-drawer-2"
              className="btn"
            >
              Open drawer
            </label>
          </div>
          <div className="drawer-side">
            <label
              htmlFor="my-drawer-2"
              aria-label="close sidebar"
              className="drawer-overlay"
            ></label>
              <div className="menu px-5 bg-[#5b1ae9] h-screen">
              <ul className=" w-80 pb-2 text-white ">
                {isAdmin ? (
                  <>
                    <NavLink
                      to="/dashbord/adminHome"
                      className="flex gap-5 items-center text-xl uppercase mb-2"
                    >
                      <h1>All subscribers</h1>
                    </NavLink>
                    <NavLink
                      to="/dashbord/addItems"
                      className="flex gap-5 items-center text-xl uppercase mb-2"
                    >
                      <h1>All Trainers</h1>
                    </NavLink>
                    <NavLink
                      to="/dashbord/menageItems"
                      className="flex gap-5 items-center text-xl uppercase mb-2"
                    >
                      <h1>Applied Trainer</h1>
                    </NavLink>
                    <NavLink
                      to="/dashbord/menageBooking"
                      className="flex gap-5 items-center text-xl uppercase mb-2"
                    >
                      <h1>Balance</h1>
                    </NavLink>
                  </>
                ) : (
                  <>
                    <NavLink
                      to="/dashbord/userHome"
                      className="flex gap-5 items-center text-xl uppercase mb-2"
                    >
                      <h1>User Home</h1>
                    </NavLink>
                    <NavLink
                      to="/dashbord/payment"
                      className="flex gap-5 items-center text-xl uppercase mb-2"
                    >
                      <h1>reservation</h1>
                    </NavLink>
                    <NavLink
                      to="/dashbord/paymentHistroy"
                      className="flex gap-5 items-center text-xl uppercase mb-2"
                    >
                      <h1>payment history</h1>
                    </NavLink>
                    <NavLink
                      to="/dashbord/myCrat"
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
              <ul className="px-1 text-white">
                <NavLink
                  to="/"
                  className="flex gap-5 items-center text-xl uppercase mb-2"
                >
                  <h1>Home</h1>
                </NavLink>
                <NavLink
                  to="/menu"
                  className="flex gap-5 items-center text-xl uppercase mb-2"
                >
                  <h1>Menu</h1>
                </NavLink>
                <NavLink
                  to="/shops"
                  className="flex gap-5 items-center text-xl uppercase mb-2"
                >
                  <h1>Shop</h1>
                </NavLink>
                <NavLink
                  to="/contact"
                  className="flex gap-5 items-center text-xl uppercase mb-2"
                >
                  <h1>contact</h1>
                </NavLink>
              </ul>
            </div>
          </div>
        </div>
        <div className="flex-1 w-11/12 mx-auto">
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default Dashboard;
