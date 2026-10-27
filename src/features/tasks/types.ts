export type Task = {
  id: string;
  title: string;
  description: string;
  ownerEmail: string;
  isCompleted: boolean;
};

export type Filter = "All" | "Done" | "Pending";
