// ========== Task Services
// import all packages
import moment from 'moment';
import {tasksCollection} from '../config';
import {
  ITask,
  ITaskForUpdateOrAdd,
  ITaskPayload,
} from '../redux/features/tasks/types';

export class TasksService {
  public static async getTasks(): Promise<ITask[]> {
    const promise = new Promise<ITask[]>((resolve, reject) => {
      try {
        tasksCollection.onSnapshot(data => {
          const tasks: ITask[] = [];

          // if (data.size === 0) {
          //   throw new Error('Task is not found');
          // }

          data.forEach(item => {
            const {taskName = '', taskDescription = '', time} = item.data();
            tasks.push({
              id: item.id,
              taskName,
              taskDescription,
              time: moment(time).format('hh:mm A'),
            });
          });

          resolve(tasks);
        });
      } catch (err) {
        const error = err as {message: string};
        reject(new Error(error.message));
      }
    });

    return promise;
  }

  public static async getTask(param: string): Promise<ITask | null> {
    const promise = new Promise<ITask | null>((resolve, reject) => {
      try {
        tasksCollection.onSnapshot(data => {
          let task: ITask | null = null;

          data.forEach(item => {
            const {taskName = '', taskDescription = '', time} = item.data();

            if (item.id === param) {
              task = {
                id: item.id,
                taskName,
                taskDescription,
                time: moment(time).format('hh:mm A'),
              };
            }
          });

          // if (task === null) {
          //   throw new Error('Task is not found');
          // }

          resolve(task);
        });
      } catch (err) {
        const error = err as {message: string};
        reject(new Error(error.message));
      }
    });

    return promise;
  }

  public static async addTask(data: ITaskForUpdateOrAdd): Promise<void> {
    try {
      await tasksCollection.add(data);
    } catch (err) {
      const error = err as {message: string};
      throw new Error(error.message);
    }
  }

  public static async updateTask(data: ITaskPayload): Promise<void> {
    try {
      const task = tasksCollection.doc(data.id);
      task.update({
        taskName: data.data.taskName,
        taskDescription: data.data.taskDescription,
      });
    } catch (err) {
      const error = err as {message: string};
      throw new Error(error.message);
    }
  }

  public static async deleteTask(id: string): Promise<void> {
    try {
      const task = tasksCollection.doc(id);
      await task.delete();
    } catch (err) {
      const error = err as {message: string};
      throw new Error(error.message);
    }
  }
}
