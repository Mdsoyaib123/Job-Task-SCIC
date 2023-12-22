import { NavLink, Outlet } from "react-router-dom";
import { IoHomeSharp } from "react-icons/io5";
import { useContext } from "react";
import sourav from "../../assets/sourav.jpg";
import { CgProfile } from "react-icons/cg";
import { IoIosCreate } from "react-icons/io";
import { VscGitPullRequestGoToChanges } from "react-icons/vsc";
import { AuthContext } from "../../Provider/AuthProvider/AuthProvider";
import './DashBoard.css'
import { FaTasks } from "react-icons/fa";


const DashBoard = () => {
  const { user } = useContext(AuthContext);
  // console.log(user);
  return (
    <div className="md:flex gap-10 lg:flex p-4 ">
      <div className=" lg:w-80   md:min-h-screen  bgImage">
        <div className="md:flex gap-3 items-center justify-center p-4">
          <div>
            <img
              className="rounded-full w-40 md: mx-auto"
              src={user.photoURL}
              alt=""
            />
          </div>
          <div className="text-white text-center">
            <h1 className="text-lg md:text-2xl">Md Soyaib Hossain </h1>
            <p>mdsoyaibsourav@gmail.com</p>
          </div>
        </div>
        <ul className="menu text-lg space-y-3 pt-8 ">
          {/* <li className="text-white">
            <NavLink to="/dashBoard/userProfile">
              <CgProfile></CgProfile>User Profile
            </NavLink>
          </li> */}
          <li className="text-white ">
            <NavLink to="/dashBoard/taskManagement">
              <FaTasks></FaTasks> Task Management 
            </NavLink>
          </li>
    
          {/* <div className="divider text-gray-900 mx-4"></div> */}

          <li className="text-white">
            <NavLink to="/">
              <IoHomeSharp></IoHomeSharp>Home
            </NavLink>
          </li>
        </ul>
        <hr className="  md:hidden  " />
      </div>

      <div className="flex-1 py-10 px-8 bgImage">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default DashBoard;
