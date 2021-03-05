import {useState} from 'react'
import { motion } from 'framer-motion'

import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'


function App() {
  const [showAddTask, setShowAddTask] = useState(false)
  const [tasks, setTasks] = useState([
    {
        id: 1,
        text: "موعد مع الطبيب",
        day: "5 فبراير 12:30 م",
        reminder: true
    },
    {
        id: 2,
        text: "موعد مع الطبيب",
        day: "5 فبراير 12:30 م",
        reminder: true
    },
    {
        id: 3,
        text: "موعد مع الطبيب",
        day: "5 فبراير 12:30 م",
        reminder: false
    }
  ])

  const addTask = task => {
    const id = Math.floor(Math.random() * 1000) + 1

    const newTask = {id, ...task}
    setTasks([...tasks, newTask])
  }

  const toggleReminder = id => {
    setTasks(tasks.map(task => task.id === id ? {...task, reminder: !task.reminder} : task))
  }

  const deleteTask = id => {
    setTasks(tasks.filter(task => task.id !== id))
  }

  return (
    <motion.div layout className='container'>
      <Header onAdd={() => setShowAddTask(!showAddTask)} showAdd={showAddTask}/>
      {showAddTask && <AddTask onAdd={addTask}/>}
      {tasks.length > 0 ? <Tasks tasks={tasks} onToggle={toggleReminder} onDelete={deleteTask} /> : <h3 style={{textAlign: 'center', marginTop: '1rem'}}>لا يوجد مهام</h3>}
    </motion.div>
  );
}

export default App;
