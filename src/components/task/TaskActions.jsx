export default function TaskActions({ addButtonClick }) {
  return (
    <div className="mb-14 items-center justify-between sm:flex">
      <h2 className="text-2xl font-semibold max-sm:mb-4">Your Tasks</h2>
      <div className="flex items-center space-x-5">
        <button className="cursor-pointer rounded-md bg-blue-500 px-3.5 py-2.5 text-sm font-semibold" onClick={addButtonClick}>
          Add Task
        </button>
        <button className="cursor-pointer rounded-md bg-red-500 px-3.5 py-2.5 text-sm font-semibold">Delete All</button>
      </div>
    </div>
  );
}
