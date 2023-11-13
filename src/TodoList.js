import React, { useState } from 'react';

function TodoList() {
    const [tasks, setTasks] = useState([]);
    const [task, setTask] = useState('');

    // todoリストのタスク追加処理
    const addTask = () => {
        if(task.trim() !== '') {
            setTasks([...tasks, task]);
            setTask('');
        }
    };

    // todoリストのタスク削除処理
    const deleteTask = (index) => {
        const newTasks = [...tasks];
        newTasks.splice(index, 1);
        setTask(newTasks);
    };

    return (
        <div>
            <h1>ToDo List with Delete</h1>
            <input 
                type="text" 
                value={task}
                onChange={(e) => setTask(e.target.value)}
                placeholder='Add a task'
            />
            <button onClick={addTask}>Add</button>
            <ul>
                {tasks.map((task, index) => (
                    <li key={index}>
                        {task}
                        <button onClick={() => deleteTask(index)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default TodoList;