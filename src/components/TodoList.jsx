import React from "react";
import { useState } from "react";
import ArrowCircleUpIcon from '@mui/icons-material/ArrowCircleUp';
import ArrowCircleDownIcon from '@mui/icons-material/ArrowCircleDown';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import NoteAltIcon from '@mui/icons-material/NoteAlt';
import { Typography, Button, Grid2 } from '@mui/material';
import { createTheme, ThemeProvider} from '@mui/material/styles';
import {Paper} from "@mui/material";

function TodoList (){
    const [tasks, setTasks] = useState(["Eat Breakfast", "Take a Shower", "Walk the Dog"]);
    const [newTask, setNewTask] = useState("");
    const [darkMode, setDarkMode] = useState(false);

    const theme = createTheme({
        palette: {
            mode: darkMode?"dark": "light"
        }
    })
    function handleInputChange(event){
        setNewTask(event.target.value);

    }
    function addTask(){
        if(newTask.trim() !== ""){
            setTasks([...tasks, newTask]);
        setNewTask("");

        }
        

    }
    function deleteTask(index){
        const updateTasks = tasks.filter((_, i)=> i !== index);
        setTasks(updateTasks);

    }
    function moveTaskUp(index){
        if(index > 0){
            const updatedTasks = [...tasks];
            [updatedTasks[index], updatedTasks[index-1]] = [updatedTasks[index-1], updatedTasks[index]];
            setTasks(updatedTasks);
        }

    }
    function moveTaskDown(index){
        if(index < tasks.length -1){
            const updatedTasks = [...tasks];
            [updatedTasks[index], updatedTasks[index+1]] = [updatedTasks[index+1], updatedTasks[index]];
            setTasks(updatedTasks);
        }

    }
    return(
        <ThemeProvider theme = {theme}>
            <Paper style= {{height: "250vh"}}>
    <div>
        
        <Grid2 display="flex" justifyContent="space-evenly" alignItems="center" size="grow">
        <Typography variant="h1" color="textprimary" gutterBottom>To-Do-List <NoteAltIcon fontSize="large"/></Typography>
        <Button variant="contained" onClick={() => setDarkMode(!darkMode)} >Change Mode</Button></Grid2>
        
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
                <AddCircleOutlineIcon/>Add
            </button>
            
           
        </div>
        <ol>
            {tasks.map((task,index)=>
            <li key={index}>
                <span className="text">{task}</span>
                <button className="delete-button"
                onClick={()=>deleteTask(index)}> <HighlightOffIcon/></button>
                <button className="move-button"
                onClick={()=>moveTaskUp(index)}><ArrowCircleUpIcon/></button>
                <button className="move-button"
                onClick={()=>moveTaskDown(index)}><ArrowCircleDownIcon/></button>
            </li>
            )}
        </ol>
    </div>
    </Paper>
    </ThemeProvider>);
   
}
export default TodoList