import axios from "axios";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const CreateTask = () => {
    const navigate = useNavigate()
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    axios.post("http://localhost:5000/createTask", data)
    .then(res=>{
        console.log(res.data);
        toast.success('Task create successfully')
        navigate('/dashboard/taskManagement')
    })
  };
  return (
    <div className="text-white ">
      <h1 className="text-xl md:text-3xl lg:text-4xl text-center">
        create TaskManagement
      </h1>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full md:w-2/3 mx-auto space-y-3 text-black "
      >
        <div>
          <label className="text-white">Title</label>
          <input
            {...register("title", { required: true })}
            className="w-full px-4 py-2 bg-base-200 rounded-md"
            type="text"
            placeholder="Title "
          />
        </div>
        <div>
          <label className="text-white">Priority</label>
          <select
            {...register("priority", { required: true })}
            required
            className="border rounded-lg border-gray-400 px-2 py-3 w-full"
          >
            <option value={" please select"} disabled selected>
              please select
            </option>
            <option value={" Low"}>Low</option>
            <option value={" Moderate"}>Moderate</option>
            <option value={" High"}>High</option>
          </select>
        </div>
        <div>
          <label className="text-white">Dead Lines</label>
          <input
            type="date"
            {...register("dateInput", { required: true })}
            className="w-full px-4 py-2 bg-base-200 rounded-md"
            placeholder="Dead Lines"
          />
        </div>

        <div>
          <label className="text-white">Descriptions</label>
          <textarea
            {...register("descriptions", { required: true })}
            rows={10}
            className="w-full bg-base-200 px-4 py-2 rounded-md"
            placeholder="Descriptions "
          ></textarea>
        </div>
        <div>
          <input
            type="submit"
            value="Create"
            className="bg-blue-600 text-white w-full text-center py-2 cursor-pointer rounded-md hover:bg-blue-700 "
          />
        </div>
      </form>
    </div>
  );
};

export default CreateTask;
