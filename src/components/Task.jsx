import { motion } from 'framer-motion'
import {FaTimes, FaRegClock} from 'react-icons/fa'

const Task = ({task, onToggle, onDelete}) => {
    return (
        <motion.div
        //  animate={{ scale: [1, 1.125, 1] }}
         whileHover={{ scale: 1.002, border: '2px solid black' }}
         whileTap={{ scale: 0.99 }}
         transition={{ duration: 0.2 }}
         className='task' 
         onDoubleClick={() => onToggle(task.id)} >
            {task.reminder ? <FaRegClock className='reminder' onClick={() => onToggle(task.id)} /> : ''}
            <h3>{task.text} <FaTimes className='delete-icon' style={{marginTop: '1.5rem'}} onClick={() => onDelete(task.id)} /></h3>
            <p>{task.day.replace("T", " | الساعة  ")}</p>            
        </motion.div>
    )
}

export default Task
