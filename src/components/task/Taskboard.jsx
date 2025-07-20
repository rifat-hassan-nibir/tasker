import { useState } from "react";
import AddTaskModal from "./AddTaskModal";
import SearchTask from "./SearchTask";
import TaskActions from "./TaskActions";
import TaskList from "./TaskList";

const defaultTasks = {
  id: crypto.randomUUID(),
  title: "Learn React",
  description: "I want to learn react so that I can make scalable web applications",
  tags: ["web", "react", "js"],
  priority: "High",
  isFavorite: true,
};

export default function TaskBoard() {
  const [tasks, setTasks] = useState([defaultTasks]);
  const [showModal, setShowModal] = useState(false);
  const [taskToUpdate, setTaskToUpdate] = useState(null);

  // FUNCTION TO SAVE NEW OR EDITED TASK
  const handleTaskSave = (newTask, isAdd) => {
    if (isAdd) {
      setTasks([...tasks, newTask]); // ADD THE NEW TASK TO THE STATE
    } else {
      setTasks(
        tasks.map((task) => {
          if (task.id === newTask.id) {
            return newTask;
          }
          return task;
        })
      );
      setTaskToUpdate(null); // RESET THE taskToUpdate STATE
    }

    setShowModal(false); // HIDE THE MODAL
  };

  const handleModalClose = () => {
    setShowModal(false);
    setTaskToUpdate(null);
  };

  // FUNCTION TO EDIT TASK
  const handleEditTaskModal = (task) => {
    setTaskToUpdate(task);
    setShowModal(true);
  };

  // FUNCTION TO DELETE TASK
  const handleDeleteTask = (taskId) => {
    const tasksAfterDelete = tasks.filter((task) => task.id !== taskId);
    setTasks(tasksAfterDelete);
  };

  // FUNCTION TO DELETE ALL TASKS
  const handleDeleteAllTask = () => {
    tasks.length = 0;
    setTasks([...tasks]);
  };

  return (
    <section className="mb-20" id="tasks">
      {showModal && <AddTaskModal onSave={handleTaskSave} onCloseClick={handleModalClose} taskToUpdate={taskToUpdate} />}
      <div className="container mx-auto">
        {/* Search Box  */}
        <div className="p-2 flex justify-end">
          <SearchTask />
        </div>
        {/* Search Box Ends */}
        <div className="rounded-xl border border-[rgba(206,206,206,0.12)] bg-[#1D212B] px-6 py-8 md:px-9 md:py-16">
          <TaskActions onAddClick={() => setShowModal(true)} onDeleteAllClick={handleDeleteAllTask} />
          <TaskList tasks={tasks} onEdit={handleEditTaskModal} onDelete={handleDeleteTask} />
        </div>
      </div>
    </section>
  );
}
