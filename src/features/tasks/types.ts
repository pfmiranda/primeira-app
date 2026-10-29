export type Task = {
  id: string;
  title: string;
  description?: string;
  priority: Priority;
  isCompleted: boolean;
};

export type Filter = "All" | "Done" | "Pending";

export type Priority = "High" | "Medium" | "Low";
