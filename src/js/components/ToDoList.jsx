import React, { useState } from "react";

const ToDoList = () => {

    const [tarea, setTarea] = useState("");
    const [tareas, setTareas] = useState([]);
    const handleInputChange = (e) => {
        setTarea(e.target.value);
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        if (tarea !== "") {
            setTareas([...tareas, tarea]);
            setTarea("");
        }
    };
    const handleDelete = (index) => {
        const newTareas = tareas.filter((_, i) => i !== index);
        setTareas(newTareas);
    };

    return (

        <div className="container bg-light mt-5">
            <h1 className="text-center mt-5">To Do List </h1>
            <form className="" onSubmit={handleSubmit}>
                <input type="text" className="" value={tarea} onChange={handleInputChange} placeholder="Añadir Tarea" />
                <button type="submit" className="btn btn-primary" value="add" > Añadir! </button>
            </form>

            <ul>
                {tareas.map((tarea, index) => (
                    <li key={index} className="list-group-item">
                        {tarea}
                        <button className="btn btn-danger ms-5" onClick={() => handleDelete(index)}>Eliminar</button>
                    </li>
                ))}
            </ul>
            <p className="mt-3">
                {tareas.length} por hacer
            </p>
        </div>




    )
}




export default ToDoList;