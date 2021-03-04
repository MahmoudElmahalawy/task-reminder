import {FaTimes, FaRegClock} from 'react-icons/fa'

const Task = ({task, onToggle, onDelete}) => {
    return (
        <div className='task' onDoubleClick={() => onToggle(task.id)} >
            {task.reminder ? <FaRegClock className='reminder' onClick={() => onToggle(task.id)} /> : ''}
            <h3>{task.text} <FaTimes className='delete-icon' onClick={() => onDelete(task.id)} /></h3>
            <p>{task.day}</p>            
        </div>
    )
}

export default Task
