import { signOut } from "firebase/auth";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../../firebase.init";
import logo from '../../Images/logo-removebg-preview.png';
const Navbar = () =>  {

  const [user] = useAuthState(auth);

  const logout = () => {
    signOut(auth);
    localStorage.removeItem('accessToken');
  };

  const menuItems = (
    <>
     <li><Link  className="text-l" to="/">Home</Link ></li>
      <li><Link className="text-l" to="/blog">Blog</Link></li>
      <li><Link className="text-l" to="/addproducts">Add Reviews</Link></li>
      { user &&
      <li><Link className="text-l" to="/dashbroad">Dashbroad</Link></li>
      }
      <li><Link className="text-l" to="/portfolio">My Portfolio</Link></li>
     
      <li>{ user ? <button className="btn btn-outline btn-accent" onClick={logout}>Log Out</button> :
        <Link to="/login" className="btn btn-outline btn-accent">Login</Link>
        }</li>
    </>
  );
  return (
    <div className="navbar  bg-gradient-to-r from-cyan-500 to-blue-500">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex="0" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex="0"
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-100%"
          >
            {menuItems}
           
          </ul>
          
        </div>
        <img className=" ml-5 w-30 h-20" src={logo} alt="" />
        <Link to="/" className="btn btn-ghost normal-case mx-6  text-4xl"> Handiworks</Link>
      </div>
      <div className="navbar-end hidden mx-8 lg:flex">
        <ul className="menu menu-horizontal p-0">{menuItems}</ul>
      </div>
      <div className="navbar-end lg:hidden">
      <label tabIndex="1" htmlFor="dashbroad-sidebar" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
      </div>
    </div>
  );
};

export default Navbar;
