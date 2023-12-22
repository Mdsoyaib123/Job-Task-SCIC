import { Link, useLoaderData } from "react-router-dom";
import { useDrag, useDrop } from "react-dnd";
import Card from "../../Component/Card/Card";
import { useState } from "react";

const TaskManagement = () => {
  const loader = useLoaderData();

  const [todoTask, setTodoTask] = useState(loader);
  const [team, setTeam] = useState([]);
  const [onGoing, setOnGoing] = useState([]);

  const [{ isOver }, addToTeamRef] = useDrop({
    accept: "player",
    collect: (monitor) => ({ isOver: !!monitor.isOver() }),
  });

  const [{ isOver: isPlayerOver }, removeFromTeamRef] = useDrop({
    accept: "team",
    collect: (monitor) => ({ isOver: !!monitor.isOver() }),
  });

  const [{ isOver: isCompleteOver }, addOnGoing] = useDrop({
    accept: "onGoing",
    collect: (monitor) => ({ isOver: !!monitor.isOver() }),
  });

  const movePlayerToTeam = (item) => {
    setTodoTask((prev) => prev.filter((_, i) => item.index !== i));
    setTeam((prev) => [...prev, item]);
  };

  const removePlayerFromTeam = (item) => {
    setTeam((prev) => prev.filter((_, i) => item.index !== i));
    setTodoTask((prev) => [...prev, item]);
  };

  const fOnGoing = (item) => {
    console.log(item);
  };
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
        <p className="border px-5 py-2 rounded-md">
          Total to-do Task :{todoTask.length}{" "}
        </p>
        <Link to={"/dashboard/createTask"}>
          <button className="px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-md">
            Create new Task
          </button>
        </Link>
      </div>
      <hr className=" mx-auto"></hr>

      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {/* Todo task */}
        <div className=" cursor-grab">
          <h1 className="text-lg md:text-2xl font-bold pb-4 underline ">
            To-do list
          </h1>
          <div className="grid grid-cols-1 gap-4" ref={removeFromTeamRef}>
            {todoTask.map((e, i) => (
              <Card
                todoTask={todoTask}
                setTodoTask={setTodoTask}
                key={i}
                item={e}
                type="player"
                index={i}
                onDropPlayer={movePlayerToTeam}
              ></Card>
            ))}
          </div>
        </div>
        {/* ongoing list */}
        <div>
          <h1 className="text-lg md:text-2xl font-bold pb-4 underline ">
            Ongoing list
          </h1>
          <div
            className="grid grid-cols-1  gap-5 cursor-grab h-full"
            ref={addToTeamRef}
          >
            {team.map((e, i) => (
              <Card
                key={i}
                item={e}
                type="team"
                index={i}
                onDropPlayer={removePlayerFromTeam}
              ></Card>
            ))}
          </div>
        </div>
        {/* complete list */}
        <div>
          <h1 className="text-lg md:text-2xl font-bold pb-4 underline ">
            Completed list
          </h1>
          <div className="grid grid-cols-1  gap-5 h-full" ref={addOnGoing}>
            {onGoing.map((e, i) => (
              <Card
                key={i}
                item={e}
                type="onGoing"
                index={i}
                onDropPlayer={fOnGoing}
              ></Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TaskManagement;
