import { useState } from "react"
export default function NewTask({onAdd}) {
    const [taskName, setTaskName] = useState('');

    function handleChange(event) {
        setTaskName(event.target.value)
    }
    function handleClick() {
        if (taskName.trim() === '') {
            return;
        }
        onAdd(taskName);
        setTaskName('');
    }

    return (
        <div className="flex items-center gap-4">
            <input type="text" onChange={handleChange} value={taskName} className="w-64 px-2 py-1 rounded-sm bg-stone-200" />
            <button onClick={handleClick} className="text-stone-700 hover:text-stone-950">Add Task</button>
        </div>
    )
}