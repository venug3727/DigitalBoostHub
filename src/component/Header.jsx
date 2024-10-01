import React from "react";
import { Link } from "react-router-dom";
function Header() {
  return (
    <>
      <div className="text-white flex p-[40px] justify-between items-center sticky z-50 top-0  bg-slate-900">
        <h1 className=" text-[25px]">
          <Link to="/">DigitalBoostHub</Link>
        </h1>
        <ul className="uppercase flex gap-[30px] items-center justify-between text-[15px]">
          <li>
            <Link to="/service">Contact</Link>
          </li>
          <li>
            <Link to="/client">About Us</Link>
          </li>
          <li>
            <Link to="/">store</Link>
          </li>
          <li>
            <Link to="/">blog</Link>
          </li>
          <li>
            <Link to="/">galley</Link>
          </li>
        </ul>
        <div className=" ">
          <button className="uppercase bg-blue-800 px-[15px] py-[4px] font-semibold text-[19px] hover:text-blue-700 hover:bg-white">
            {" "}
            sign up
          </button>
        </div>
      </div>
    </>
  );
}

export default Header;
