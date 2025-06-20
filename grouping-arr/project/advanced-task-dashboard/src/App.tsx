
import React, { useState, useMemo } from "react";
import { tasks } from "./data";
import { groupByPhaseAndStep } from "./utils/groupBy";
import { PhaseGroup } from "./components/PhaseGroup";

const App: React.FC = () => {
  const [statusFilter, setStatusFilter] = useState<string>("All");
  const [assigneeFilter, setAssigneeFilter] = useState<string>("All");
  const [phaseFilter, setPhaseFilter] = useState<string>("All");
  const [stepFilter, setStepFilter] = useState<string>("All");
  const [deadlineFilter, setDeadlineFilter] = useState<string>("");

  // Get unique values for dropdowns
  const uniqueValues = useMemo(() => {
    const statuses = Array.from(new Set(tasks.map(t => t.Status)));
    const assignees = Array.from(new Set(tasks.map(t => t.Assignee)));
    const phases = Array.from(new Set(tasks.map(t => t.Phase)));
    const steps = Array.from(new Set(tasks.map(t => t.Step)));

    return { statuses, assignees, phases, steps };
  }, []);

  // Filter logic
  const filteredTasks = useMemo(() => {
    return tasks.filter(task => {
      const matchesStatus =
        statusFilter === "All" || task.Status === statusFilter;
      const matchesAssignee =
        assigneeFilter === "All" || task.Assignee === assigneeFilter;
      const matchesPhase =
        phaseFilter === "All" || task.Phase === phaseFilter;
      const matchesStep = stepFilter === "All" || task.Step === stepFilter;
      const matchesDeadline =
        deadlineFilter === "" || new Date(task.Deadline) <= new Date(deadlineFilter);

      return (
        matchesStatus &&
        matchesAssignee &&
        matchesPhase &&
        matchesStep &&
        matchesDeadline
      );
    });
  }, [statusFilter, assigneeFilter, phaseFilter, stepFilter, deadlineFilter]);

  const grouped = groupByPhaseAndStep(filteredTasks);

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold text-blue-900 mb-4">
          Task Management Dashboard
        </h1>

        {/* 🔍 Filter Panel */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 bg-white p-4 rounded shadow mb-6">
          <select
            value={statusFilter}
            onChange={e => setStatusFilter(e.target.value)}
            className="p-2 border rounded"
          >
            <option value="All">All Statuses</option>
            {uniqueValues.statuses.map(status => (
              <option key={status}>{status}</option>
            ))}
          </select>

          <select
            value={assigneeFilter}
            onChange={e => setAssigneeFilter(e.target.value)}
            className="p-2 border rounded"
          >
            <option value="All">All Assignees</option>
            {uniqueValues.assignees.map(assignee => (
              <option key={assignee}>{assignee}</option>
            ))}
          </select>

          <select
            value={phaseFilter}
            onChange={e => setPhaseFilter(e.target.value)}
            className="p-2 border rounded"
          >
            <option value="All">All Phases</option>
            {uniqueValues.phases.map(phase => (
              <option key={phase}>{phase}</option>
            ))}
          </select>

          <select
            value={stepFilter}
            onChange={e => setStepFilter(e.target.value)}
            className="p-2 border rounded"
          >
            <option value="All">All Steps</option>
            {uniqueValues.steps.map(step => (
              <option key={step}>{step}</option>
            ))}
          </select>

          <input
            type="date"
            value={deadlineFilter}
            onChange={e => setDeadlineFilter(e.target.value)}
            className="p-2 border rounded"
          />
        </div>

        {/* 📦 Grouped Output */}
        {Object.entries(grouped).length === 0 ? (
          <p className="text-gray-500">No tasks match the filters.</p>
        ) : (
          Object.entries(grouped).map(([phase, steps]) => (
            <PhaseGroup key={phase} phase={phase} steps={steps} />
          ))
        )}
      </div>
    </div>
  );
};

export default App;
