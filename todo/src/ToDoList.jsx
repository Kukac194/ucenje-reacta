import React, {useState} from 'react';

function ToDoList() {

    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState("");

    function handleInputChange(e) {
        setNewTask(e.target.value);
    }

    function addTask() {

        if (newTask.trim() !== "")
        {
            setTasks(t => [...t, newTask]);
            setNewTask("");
        }
    }

    function deleteTask(index) {
        const updatedTasks = tasks.filter((_element, i) => i !== index);
        setTasks(updatedTasks);
    }

    function moveTaskUp(index) {
        if (index > 0) {
            const updatedTasks = [...tasks];
            [updatedTasks[index], updatedTasks[index-1]] = [updatedTasks[index-1], updatedTasks[index]];
            setTasks(updatedTasks);
        }
    }

    function moveTaskDown(index) {
        if (index < tasks.length - 1) {
            const updatedTasks = [...tasks];
            [updatedTasks[index], updatedTasks[index+1]] = [updatedTasks[index+1], updatedTasks[index]];
            setTasks(updatedTasks);
        }
    }

    return (
        <div className='to-do-list'>
            <h1>To-Do-List</h1>

            <div>
                <input type="text" placeholder='Enter a task...' 
                value={newTask}
                onChange={handleInputChange}
                />
                <button className='add-button' onClick={addTask}>
                    Add
                </button>
            </div>
            <ol>
                {tasks.map((task, i) => 
                    <li key={i}>
                        <span className='text'>
                            {task}
                        </span>
                        <button className='delete-button' onClick={() => deleteTask(i)}>
                            Delete
                        </button>
                        <button className='move-button' onClick={() => moveTaskUp(i)}>
                            UP
                        </button>
                        <button className='delete-button' onClick={() => moveTaskDown(i)}>
                            DOWN
                        </button>
                    </li>
                )}
            </ol>
        </div>
    );
}

export default ToDoList;