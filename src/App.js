import { useState, useEffect } from "react";
import { motion } from "framer-motion";

import Header from "./components/Header";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";

function App() {
	const [showAddTask, setShowAddTask] = useState(false);
	const [tasks, setTasks] = useState(null);

	const addTask = (task) => {
		const id = Math.floor(Math.random() * 1000) + 1;
		const updatedTasks = [...tasks, { id, ...task }];

		localStorage.setItem("tasks", JSON.stringify(updatedTasks));
		setTasks(updatedTasks);
	};

	const toggleReminder = (id) => {
		const updatedTasks = tasks.map((task) => (task.id === id ? { ...task, reminder: !task.reminder } : task));

		localStorage.setItem("tasks", JSON.stringify(updatedTasks));
		setTasks(updatedTasks);
	};

	const deleteTask = (id) => {
		const updatedTasks = tasks.filter((task) => task.id !== id);

		localStorage.setItem("tasks", JSON.stringify(updatedTasks));
		setTasks(updatedTasks);
	};

	useEffect(() => {
		const tasksInLS = JSON.parse(localStorage.getItem("tasks")) ?? [
			{
				id: 1,
				text: "موعد مع الطبيب",
				day: "2020-12-05 | الساعة 18:30",
				reminder: true,
			},
			{
				id: 2,
				text: "الذهاب للنادي",
				day: "2020-12-06 | الساعة 08:30",
				reminder: true,
			},
			{
				id: 3,
				text: "تسوق",
				day: "2020-12-07 | الساعة 15:00",
				reminder: false,
			},
		];

		setTasks(tasksInLS);
	}, []);

	return (
		<motion.div layout className="container">
			<Header onAdd={() => setShowAddTask(!showAddTask)} showAdd={showAddTask} />
			{showAddTask && <AddTask onAdd={addTask} />}
			{tasks?.length > 0 ? (
				<Tasks tasks={tasks} onToggle={toggleReminder} onDelete={deleteTask} />
			) : (
				<h3 style={{ textAlign: "center", marginTop: "1rem" }}>لا يوجد مهام</h3>
			)}
		</motion.div>
	);
}

export default App;
