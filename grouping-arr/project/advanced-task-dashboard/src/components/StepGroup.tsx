
import type { Task } from "../types/Task";
import { TaskItem } from "./TaskItem";

export const StepGroup = ({ step, tasks }: { step: string; tasks: Task[] }) => (
  <div className="mb-4">
    <h4 className="text-md font-bold text-blue-700">{step}</h4>
    <div>
      {tasks.map((task, i) => (
        <TaskItem key={i} task={task} />
      ))}
    </div>
  </div>
);
