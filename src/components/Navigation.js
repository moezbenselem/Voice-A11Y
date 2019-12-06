import React, { Component } from "react";
import { NavLink, withRouter } from "react-router-dom";
export default class Navigation extends Component {
  render() {
    const clickAvatar = () =>{
      alert('Due to time limit we were not able to fulfill the user login and session ! we did our best !')
    }
    return (
      <div className="">
        <nav className="flex items-center flex-wrap bg-gray-900 px-2 fixed z-50 w-screen h-auto">
          <div>
            
            <p className="text-4xl robotto leading-none pt-4">My-EPI</p>
            <p className="text-xl font-hairline  leading-none pb-4">
            École pluridisciplinaire internationale - Sousse
            </p>
          </div>
          <div className="flex items-center justify-between w-1/4 m-auto">
            <NavLink
              className="text-xl font-hairline hover:text-blue-600"
              activeClassName="active"
              to="/home"
            >
              Home
            </NavLink>
            <NavLink
              className="text-xl font-hairline hover:text-blue-600"
              activeClassName="active"
              to="/services"
            >
              Services
            </NavLink>
            <NavLink
              className="text-xl font-hairline hover:text-blue-600"
              activeClassName="active"
              to="/contact"
            >
              Contact
            </NavLink>
            {/* <NavLink
              className="text-xl font-hairline hover:text-blue-600"
              activeClassName="active"
              to="/login"
            >
              Login
            </NavLink> */}
            <div className='flex float-left cursor-pointer' onClick={clickAvatar}>Username
            <img src='../images/avatar.png' className='rounded-full w-12 h-12 m-2'/>

            </div>
            
          </div>
          <img src='../images/epi.gif' />
        </nav>
      </div>
    );
  }
}
