import React from "react";
import { Link } from "react-router-dom";

//Icons
import { BiSearchAlt2 } from "react-icons/bi";

const Navbar = () => {
  return (
    <div className="min-h-[180px]  md:min-h-[120px] lg:min-h-[80px] w-full ">
      <div className="min-h-[180px]  md:min-h-[120px] lg:min-h-[80px] fixed  w-screen flex items-center fiex top-0 left-0 bg-[#191c2241] backdrop-blur-md ">
        <div className="container flex flex-col  md:flex-row gap-2 items-center justify-between pr-8 pl-3">
          <div className="flex items-center  w-full md:items-start md:flex-col lg:flex-row lg:items-center gap-2 lg:gap-10">
            <Link to="/" className="flex  items-center gap-1">
              <div className="avatar">
                <div className="w-12 rounded-xl">
                  <img src="/assets/logo.png" alt="" />
                </div>
              </div>
              <div className="text-xl font-semibold hidden md:flex">
                Account Trade
              </div>
            </Link>

            <form
              className="w-full md:w-[300px]  flex items-center h-[40px] "
              action=""
            >
              <input
                className="w-full rounded-l-md h-[40px] outline-none p-2"
                type="text"
                placeholder="Search"
              />
              <button
                className="btn btn-sm  h-[40px] rounded-r-md rounded-l-none"
                type="submit"
              >
                <BiSearchAlt2 />
              </button>
            </form>
          </div>
          <div className="flex items-center w-full md:w-fit  gap-2">
            <Link
              to="/login"
              className="btn-info btn font-[700] w-1/2  md:w-fit"
            >
              Login
            </Link>
            <Link
              to="/register"
              className="btn-success btn font-[700]  w-1/2 md:w-fit  "
            >
              Register
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
