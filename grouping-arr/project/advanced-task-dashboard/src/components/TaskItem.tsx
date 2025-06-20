import type { Task } from "../types/Task";


export const TaskItem = ({ task }: { task: Task }) => (
  <div className="bg-white shadow p-2 rounded mb-2">
    <div className="text-sm font-semibold">{task.Task}</div>
    <div className="text-xs text-gray-600">
      Assigned to: {task.Assignee} | Deadline: {task.Deadline}
    </div>
    <div className="text-xs text-blue-500">Status: {task.Status}</div>
  </div>
);
