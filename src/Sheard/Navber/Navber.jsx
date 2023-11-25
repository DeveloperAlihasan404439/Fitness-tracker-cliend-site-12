import { Link, NavLink } from "react-router-dom";
import { MdMenuBook } from 'react-icons/md';

import logo from "../../assets/img/hot_3.png";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
} from "@chakra-ui/react";
import useAuth from '../Hooks/useAuth'
import './Navber.css'
const Navber = () => {
  const {user,logout} = useAuth()
  const navItems = (
    <>
      <NavLink>Home</NavLink>
      <NavLink to='/gallery'>Gallery</NavLink>
      <NavLink>Trainer</NavLink>
      <NavLink>Classes</NavLink>
      <NavLink>Dashboard</NavLink>
      <NavLink>Community</NavLink>
    </>
  );
  return (
    <div className="bg-[#F7F7F7] text-black sticky top-0 left-0 z-30 w-full">
      <div className="navbar w-11/12 mx-auto">
        <div className="w-[80%] md:w-[70%] flex md:gap-4 justify-between md:justify-start ">
          <div className="drawer lg:hidden">
            <input id="my-drawer" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">
              <label  htmlFor="my-drawer">
                  <MdMenuBook className="text-3xl" />
              </label>
            </div>
            <div className="drawer-side mt-16">
              <label
                htmlFor="my-drawer"
                aria-label="close sidebar"
                className="drawer-overlay"
              ></label>
              <ul className="menu pl-8 p-4 w-[70%] min-h-full text-lg md:text-xl bg-[#112e45] text-white">
                {navItems}
              </ul>
            </div>
          </div>
          <img src={logo} alt="" className="w-[100px] lg:w-[150px]" />
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="flex gap-5 uppercase text-xl font-medium ">
          {navItems}
          </ul>
        </div>
        <div className="navbar-end">
          <Menu>
            <MenuButton >
              {
                user?<img
                src={user?.photoURL}
                alt=""
                className="rounded-[50%] w-[50px] h-[45px] p-2 border-2 border-[#5b1ae9]"
              />:
              <img
                src="https://i.ibb.co/zZx94Sz/user.jpg"
                alt=""
                className="rounded-[50%] w-[50px]"
              />
              }
              
            </MenuButton>
            {user ? (
              <MenuList className=" mr-6">
                <div className=" w-full bg-[#112e45] text-white p-3 rounded-b-lg">
                  <MenuItem>{user?.displayName}</MenuItem>
                  <MenuItem>{user?.email}</MenuItem>
                  <MenuDivider className="my-2" />
                  <MenuItem onClick={logout}>Log Out</MenuItem>
                </div>
              </MenuList>
            ) : (
              <MenuList className="mr-8">
                <div className=" w-[200px] bg-[#112e45] text-white p-3 rounded-b-lg">
                  <MenuDivider className="my-2" />
                  <MenuItem>
                    <Link to="/signup">Sing Up</Link>
                  </MenuItem>
                  <MenuItem>
                    <Link to="/login">Login</Link>
                  </MenuItem>
                </div>
              </MenuList>
            )}
          </Menu>
        </div>
      </div>
    </div>
  );
};

export default Navber;
