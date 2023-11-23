import React, { useContext, useState } from "react";
import { Context } from "../main";
import Todo from "../components/Todo";
import toast from "react-hot-toast";

const Home = () => {
  const [title, setTitle] = useState("");

  const { tasks, setTasks } = useContext(Context);

  const updateHandler = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks[index].isCompleted = !updatedTasks[index].isCompleted;
    setTasks(updatedTasks);
    toast.success("Task Updated Successfully");
  };

  const deleteHandler = (index) => {
    const filterTasks = tasks.filter((item, i) => i != index);
    setTasks(filterTasks);
    toast.success("Task Deleted Successfully");
  };

  const submitHandler = (e) => {
    e.preventDefault();
    setTasks([...tasks, { title, isCompleted: false }]);
    toast.success("Task Added Successfully");

    setTitle("");
  };

  return (
    <div className="container">
      <div className="formStyle">
        <section>
          <form onSubmit={submitHandler}>
            <input
              type="text"
              placeholder="Add task"
              required
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />

            <button type="submit">Add Task</button>
          </form>
        </section>
      </div>

      <section className="todosContainer">
        {tasks.map((i, index) => (
          <Todo
            title={i.title}
            isCompleted={i.isCompleted}
            updateHandler={updateHandler}
            deleteHandler={deleteHandler}
            key={index}
            index={index}
          />
        ))}
      </section>
    </div>
  );
};

export default Home;
