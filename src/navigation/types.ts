import { type Task } from "../features/tasks/types";

export type RootStackParamList = {
  Home: undefined;
  Tasks: { taskList: Task[] } | undefined;
  TaskDetail: { task: Task };
  NewTask: { taskList: Task[] };
  Profile: undefined;
};
