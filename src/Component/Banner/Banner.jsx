import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div className=" md:flex  gap-5 py-24 px-2 md:px-16 bg-base-200">
      <div className=" md:flex-1 lg:pr-10">
        <h2 className="text-gray-500">TASK MANAGEMENT</h2>
        <div className="  pt-3 pr-8">
        <h1 className="text-2xl md:text-3xl lg:text-5xl space-y-5">Simplify task <br></br> management and <br></br> prioritize work</h1>
        <p className="text-lg md:text-xl lg:text-2xl py-10">Dynamic Task Manager is the leading software for Task management, according to G2¹. See all your work in one place so you can prioritize what matters most.</p>
        <Link to={'/dashboard/taskManagement'}><button className=" btn bg-blue-600 text-white hover:bg-blue-800">Let’s Explore </button></Link>
        </div>
      </div>
      <div className="flex-1 ">
        <img src="https://i.ibb.co/YQWPqS4/uses-taskmanagement-hero-io-transform-fill-width-1440-format-webp.webp" alt="" />
      </div>
    </div>
  );
};

export default Banner;
