import { MdDelete } from "react-icons/md";
import { AiFillEdit } from "react-icons/ai";
import { useDrag } from "react-dnd";
import axios from "axios";
import Swal from "sweetalert2";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";

const Card = ({ item, type, index, onDropPlayer ,setTodoTask,todoTask}) => {
  const [{ isDraggble }, dragRef] = useDrag(() => ({
    type: type,
    item: () => ({ ...item, index }),
    end: (item, monitor) => {
      const dropResult = monitor.getDropResult();
      if (dropResult && item) {
        onDropPlayer(item);
      }
    },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  }));

 

  const handleDelete =(id)=>{
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        const res = await axios.delete(`https://job-task-scic-server.vercel.app/delete/${id}`);
        console.log(res.data);
        if (res.data.deletedCount > 0) {
          toast.success("You delete donation successfully");
          const filter = todoTask.filter(item=> item._id !== id)
          setTodoTask(filter)

         
        }
      }
    });
    
  }

  return (
    <div ref={dragRef} key={item._id} className="border h-[250px] rounded-md p-3">
      <h1 className="md:text-lg lg:text-2xl ">{item.title}</h1>
      <p>{item.priority}</p>
      <p>{item.dateInput}</p>
      <p>{item.descriptions}</p>
      <div className="  flex justify-end gap-4 items-end pt-4">
        <Link to={`/edit/${item._id}`}><button  className="bg-blue-500 px-4 py-2 rounded-full bottom-1">
          <AiFillEdit></AiFillEdit>
        </button></Link>
        <button onClick={()=>handleDelete(item._id)} className="bg-blue-500 px-4 py-2 rounded-full ">
          <MdDelete></MdDelete>
        </button>
      </div>
    </div>
  );
};

export default Card;
