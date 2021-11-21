import { Controller } from '@nestjs/common';
import { TodoService } from './todo.service';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';

@Controller()
export class TodoController {
  constructor(private readonly todoService: TodoService) {}

  @MessagePattern('create-todo')
  create(@Payload() createTodoDto: CreateTodoDto) {
    return this.todoService.create(createTodoDto);
  }

  @MessagePattern('get-todos')
  findAll() {
    return this.todoService.findAll();
  }

  @MessagePattern('get-todo')
  findOne(@Payload() id: string) {
    return this.todoService.findOne(id);
  }

  @MessagePattern('update-todo')
  update(
    @Payload('id') id: string,
    @Payload('updateTodoDto') updateTodoDto: UpdateTodoDto,
  ) {
    return this.todoService.update(id, updateTodoDto);
  }

  @MessagePattern('delete-todo')
  remove(@Payload('id') id: string) {
    return this.todoService.remove(id);
  }
}
