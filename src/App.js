import {useState} from 'react'

import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'


function App() {
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

  const toggleReminder = id => {
    setTasks(tasks.map(task => task.id === id ? {...task, reminder: !task.reminder} : task))
  }

  const deleteTask = id => {
    setTasks(tasks.filter(task => task.id !== id))
  }

  return (
    <div className='container'>
      <Header />
      <AddTask />
      {tasks.length > 0 ? <Tasks tasks={tasks} onToggle={toggleReminder} onDelete={deleteTask} /> : 'لا يوجد مهام'}
    </div>
  );
}

export default App;
