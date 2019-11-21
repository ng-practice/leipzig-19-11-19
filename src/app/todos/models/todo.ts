export interface Todo {
  text: string;
  isDone: boolean;
}

class Task implements Todo {
  text: string;
  isDone: boolean;

  createdAt: Date;
}

class TaskComponent extends Task {}

addToTaskList({ text: '', isDone: false });

function addToTaskList(task: Todo) {
  // ...
}
