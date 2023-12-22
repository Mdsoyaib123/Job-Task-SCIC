import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";
import { TbWorld } from "react-icons/tb";
import { IoLogoYoutube } from "react-icons/io";


const Footer = () => {
  return (
    <div className=" bg-[#2A2B2C] text-white">
      <div
        name=""
        className="hidden py-6  px-6 max-w-6xl mx-auto md:flex justify-between"
      >
        <div className="flex gap-20 items-center version pb-6 md:pb-0 ">
          <p className="md:text-xl hover:underline cursor-pointer">© 2023 Dynamic Task Manager.</p>
          <p className="flex gap-2 md:text-xl hover:underline cursor-pointer"><TbWorld size={25}></TbWorld>English</p>
          <p className="cursor-pointer md:text-xl hover:underline">Terms & Privacy</p>
        </div>
        <div>
          <h1 className="pb-4 font-bold text-lg ">Socials</h1>
          <div className="social flex gap-8">
            <a
              className="hover:scale-105 hover:underline"
              href="https://github.com/Mdsoyaib123"
              target="_blank"
            >
              <FaGithubSquare size={30}></FaGithubSquare>
            </a>
            <a
              className="hover:scale-105 hover:underline"
              href="https://www.linkedin.com/in/md-soyaib-hossain-9b75a92a0/"
              target="_blank"
            >
              <FaLinkedin size={30}></FaLinkedin>
            </a>
            <a
              className="hover:scale-105 hover:underline"
              href="https://www.facebook.com/mdsoyaib.hossain.77/"
              target="_blank"
            >
              <FaFacebook size={30}></FaFacebook>
            </a>
            <a href="">
              <IoLogoYoutube size={30}></IoLogoYoutube>
            </a>
          </div>
        </div>
      </div>
      <div className="md:hidden text-center">
        <h1 className="py-4">Copyright © 2023by Dynamic Task Manager .</h1>
      </div>
    </div>
  );
};

export default Footer;
