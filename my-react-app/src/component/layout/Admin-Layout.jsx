import React, { useEffect, useState } from "react";
import { Outlet, NavLink } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { IoMdContact } from "react-icons/io";

const AdminLayout = () => {
 const [isAdmin, setIsAdmin] = useState(false);

 useEffect(()=>{
  const check = prompt("Are you admin?")

  if(check == "yes"){
    setIsAdmin(true);
  }
 },[]);
  return (
    <div>
      This is admin panel
      {isAdmin ? (
        <header>
          <div>
            <nav>
              <ul className='grid grid-cols-4 bg-red-200 h-[40px] justify-center items-center '>
                <li className='flex justify-center items-center'>
                  <NavLink to='/admin/users'>
                    <FaUser />
                    Users
                  </NavLink>
                </li>
                <li className='flex justify-center items-center'>
                  <NavLink to={"/admin/contacts"}>
                    <IoMdContact />
                    Contacts
                  </NavLink>
                </li>
                <li className='flex justify-center items-center'>
                  <NavLink to={"/"}>
                    <FaHome />
                    Home
                  </NavLink>
                </li>
              </ul>
            </nav>
          </div>
        </header>
      ) : (
        <>
          <p>Access denied</p>
        </>
      )}
      <Outlet />
    </div>
  );
};

export default AdminLayout;
