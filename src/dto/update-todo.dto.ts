import { TodoStatus } from '../models/todo-status';

export class UpdateTodoDto  {
  title: string;
  status: TodoStatus;
}
