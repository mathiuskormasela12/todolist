// ========== Task Slice
// import all packages
import {PayloadAction, createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {
  ITask,
  ITaskForUpdateOrAdd,
  ITaskPayload,
  ITaskSliceState,
} from './types';
import {TasksService} from '../../../services/TaskService';

const initialState: ITaskSliceState = {
  tasks: [],
  task: {
    id: '',
    taskName: '',
    taskDescription: '',
    time: '',
  },
  loading: false,
};

export const getTasks = createAsyncThunk('/tasks/get', async () => {
  try {
    const data = await TasksService.getTasks();
    return data;
  } catch (err) {
    throw new Error(err as string);
  }
});

export const addTask = createAsyncThunk(
  '/tasks/add',
  async (data: ITaskForUpdateOrAdd) => {
    try {
      await TasksService.addTask(data);
      const result = await TasksService.getTasks();
      return result;
    } catch (err) {
      throw new Error(err as string);
    }
  },
);

export const updateTask = createAsyncThunk(
  '/tasks/update',
  async (data: ITaskPayload) => {
    try {
      await TasksService.updateTask(data);
      const result = await TasksService.getTasks();
      return result;
    } catch (err) {
      throw new Error(err as string);
    }
  },
);

export const deleteTask = createAsyncThunk(
  '/tasks/delete',
  async (id: string) => {
    try {
      await TasksService.deleteTask(id);
      const result = await TasksService.getTasks();
      return result;
    } catch (err) {
      throw new Error(err as string);
    }
  },
);

export const getTask = createAsyncThunk('/task/get', async (id: string) => {
  try {
    const data = await TasksService.getTask(id);
    return data;
  } catch (err) {
    throw new Error(err as string);
  }
});

const tasksSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    setTasks(state, action: PayloadAction<ITaskSliceState>) {
      state.tasks = action.payload.tasks;
    },
    setTask(state, action: PayloadAction<ITask>) {
      state.task = action.payload;
    },
  },
  extraReducers(builder) {
    builder.addCase(getTasks.pending, state => {
      state.loading = true;
    });

    builder.addCase(getTasks.fulfilled, (state, action) => {
      state.loading = false;
      state.tasks = action.payload;
    });

    builder.addCase(getTasks.rejected, state => {
      state.loading = false;
      state.tasks = [];
    });

    builder.addCase(addTask.fulfilled, (state, action) => {
      state.loading = false;
      state.tasks = action.payload;
    });

    builder.addCase(addTask.rejected, state => {
      state.loading = false;
    });

    builder.addCase(addTask.pending, state => {
      state.loading = true;
    });

    builder.addCase(getTask.pending, state => {
      state.loading = true;
    });

    builder.addCase(getTask.fulfilled, (state, action) => {
      state.loading = false;

      if (action.payload) {
        state.task = action.payload;
      } else {
        state.task = {
          id: '',
          taskName: '',
          taskDescription: '',
          time: '',
        };
      }
    });

    builder.addCase(getTask.rejected, state => {
      state.loading = false;
      state.task = {
        id: '',
        taskName: '',
        taskDescription: '',
        time: '',
      };
    });

    builder.addCase(updateTask.fulfilled, (state, action) => {
      state.loading = false;
      state.tasks = action.payload;
    });

    builder.addCase(updateTask.rejected, state => {
      state.loading = false;
    });

    builder.addCase(updateTask.pending, state => {
      state.loading = true;
    });

    builder.addCase(deleteTask.fulfilled, (state, action) => {
      state.loading = false;
      state.tasks = action.payload;
    });

    builder.addCase(deleteTask.rejected, state => {
      state.loading = false;
    });

    builder.addCase(deleteTask.pending, state => {
      state.loading = true;
    });
  },
});

export const {setTasks, setTask} = tasksSlice.actions;
export default tasksSlice.reducer;
