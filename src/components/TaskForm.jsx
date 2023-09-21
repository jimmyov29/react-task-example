import React from "react";
import { useState, useContext } from "react";
import {TaskContext} from '../context/TaskContext';

function TaskForm() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const {createTask} = useContext(TaskContext);

  const handleSubtmit = (e) => {
    e.preventDefault();
    console.log(title, description);

    createTask({  
      title, 
      description
    });
    setTitle('')
    setDescription('')
  };

  return (
    <div className="max-w-md mx-auto">
      <form onSubmit={handleSubtmit} className="bg-slate-800 p-10 mb-4">
      <h1 className="text-2xl mb-2 text-white font-bold">Crea tu tarea</h1>
        <input
          placeholder="Escribe tu tarea"
          onChange={(e) => setTitle(e.target.value)}
          value = {title}
          className=" w-full p-3 mb-3 bg-slate-300"
          autoFocus
        />
        <textarea
          placeholder="Escribe la descripcion de la tarea"
          onChange={(e) => setDescription(e.target.value)}
          value ={description}
          className=" w-full p-3 mb-2 bg-slate-300"
        ></textarea>
        <button className="bg-indigo-500 px-4 py-1 text-white ">Guardar</button>
      </form>
    </div>
  );
}

export default TaskForm;
