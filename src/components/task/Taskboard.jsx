import { useState } from "react";
import SearchTask from "./SearchTask";
import TaskActions from "./TaskActions";
import TaskList from "./TaskList";
import AddTaskModal from "./AddTaskModal";

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
  
  return (
    <section className="mb-20" id="tasks">
      {showModal && <AddTaskModal />}
      <div className="container mx-auto">
        {/* Search Box  */}
        <div className="p-2 flex justify-end">
          <SearchTask />
        </div>
        {/* Search Box Ends */}
        <div className="rounded-xl border border-[rgba(206,206,206,0.12)] bg-[#1D212B] px-6 py-8 md:px-9 md:py-16">
          <TaskActions addButtonClick={() => setShowModal(true)}/>
          <TaskList tasks={tasks} />
        </div>
      </div>
    </section>
  );
}
