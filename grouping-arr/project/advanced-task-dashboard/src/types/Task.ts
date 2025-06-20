export interface Task {
  Phase: string;
  Step: string;
  Task: string;
  Value: number;
  Assignee: string;
  Deadline: string; // ISO date
  Status: "Pending" | "In Progress" | "Completed";
}
