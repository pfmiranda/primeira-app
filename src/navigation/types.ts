import { type Task } from "../features/tasks/types";

export type RootStackParamList = {
  Home: undefined;
  Tasks: undefined;
  TaskDetail: { task: Task };
  Form: undefined;
};
