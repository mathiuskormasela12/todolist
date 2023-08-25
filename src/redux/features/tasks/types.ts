// ========== Task Slice Types

export interface ITask {
  id: string;
  taskName: string;
  taskDescription: string;
  time: string;
}

export interface ITaskForUpdateOrAdd {
  taskName: string;
  taskDescription: string;
  time: string;
}

export interface ITaskSliceState {
  tasks: ITask[];
  task: ITask;
  loading: boolean;
}

export interface ITaskPayload {
  id: string;
  data: {
    taskName: string;
    taskDescription: string;
  };
}
