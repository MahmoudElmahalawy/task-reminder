import Task from './Task'

const Tasks = ({tasks, onToggle, onDelete}) => {
    // setTasks([...tasks, {id:4, text: "التسوق للخضراوات", day: "6 فبراير 03:00 م", reminder: true}])
    return (
        <>
            {tasks.map(task => <Task key={task.id} task={task} onToggle={onToggle} onDelete={onDelete} />)}
        </>
    )
}

export default Tasks
