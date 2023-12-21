import { Link, useLoaderData } from "react-router-dom";
import { MdDelete } from "react-icons/md";
import { AiFillEdit } from "react-icons/ai";


const TaskManagement = () => {
    const loader = useLoaderData()
    
  return (
    <div className="text-white ">
      <h3 className="text-center text-lg md:text-xl lg:text-2xl text-blue-500">
        Task Management{" "}
      </h3>
      <h1 className="text-center text-xl md:text-3xl lg:text-5xl pt-6 pb-5">
        Create a new task
      </h1>
      <hr className="w-1/2 mx-auto"></hr>
      <div className="flex items-center justify-between pt-6 pb-6">
        <p className="border px-5 py-2 rounded-md">Total Task : </p>
        <Link to={"/dashboard/createTask"}>
          <button className="px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-md">
            Create new Task
          </button>
        </Link>
      </div>
      <hr className=" mx-auto"></hr>
      <div className="mt-6 ">
        <h1 className="text-lg md:text-2xl font-bold underline ">To-do list</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 "> 
            {
                loader.map((item)=><div key={item._id} className="border rounded-md p-3">
                    <h1 className="md:text-lg lg:text-2xl">{item.title}</h1>
                    <p>{item.priority}</p>
                    <p>{item.dateInput}</p>
                    <p>{item.descriptions}</p>
                    <div className="flex justify-end gap-4 items-end pt-4">
                        <button className="bg-blue-500 px-4 py-2 rounded-md"><AiFillEdit></AiFillEdit></button>
                        <button className="bg-blue-500 px-4 py-2 rounded-md"><MdDelete></MdDelete></button>
                    </div>
                </div>)
            }
        </div>
      </div>
    </div>
  );
};

export default TaskManagement;
