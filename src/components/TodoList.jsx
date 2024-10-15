import React from "react";
import { useState } from "react";

function TodoList (){
    const [tasks, setTasks] = useState(["Eat Breakfast", "Take a Shower", "Walk the Dog"]);
    const [newTask, setNewTask] = useState("");
    function handleInputChange(event){
        setNewTask(event.target.value);

    }
    function addTask(){
        setTasks([...tasks, newTask]);
        setNewTask("");

    }
    function deleteTask(index){
        const updateTasks = tasks.filter((_, i)=> i !== index);
        setTasks(updateTasks);

    }
    function moveTaskUp(index){

    }
    function moveTaskDown(index){

    }
    return(<div>
        <h1>To-Do-List</h1>
        <div>
            <input
            type="text"
            placeholder="Enter a task..."
            value={newTask}
            onChange={handleInputChange}
            />
            <button 
            className="add-button"
            onClick={addTask}>
                Add
            </button>
            
           
        </div>
        <ol>
            {tasks.map((task,index)=>
            <li key={index}>
                <span className="text">{task}</span>
                <button className="delete-button"
                onClick={()=>deleteTask(index)}>Delete</button>
                <button className="move-button"
                onClick={()=>moveTaskUp(index)}>Up</button>
                <button className="move-button"
                onClick={()=>moveTaskDown(index)}>Down</button>
            </li>
            )}
        </ol>
    </div>);
}
export default TodoList