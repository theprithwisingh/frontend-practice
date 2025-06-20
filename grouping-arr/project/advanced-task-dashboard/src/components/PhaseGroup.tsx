import type { Task } from "../types/Task";
import { StepGroup } from "./StepGroup";


export const PhaseGroup = ({ phase, steps }: { phase: string; steps: Record<string, Task[]> }) => (
  <div className="mb-8 border-l-4 border-blue-400 pl-4">
    <h2 className="text-xl font-bold text-blue-900 mb-2">{phase}</h2>
    {Object.entries(steps).map(([step, tasks]) => (
      <StepGroup key={step} step={step} tasks={tasks} />
    ))}
  </div>
);
