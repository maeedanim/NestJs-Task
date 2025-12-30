import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateTaskDto } from './dto/create-task.dto';
import { GetTasksFilterDto } from './dto/get-tasks-filter.dto';
import { TaskStatus } from './task-status.enum';
import { Task } from './task.entity';
import { TasksRepository } from './tasks.repository';

@Injectable()
export class TasksService {
  constructor(
    @InjectRepository(TasksRepository)
    private tasksRepository: TasksRepository,
  ) {}

  // async getAllTask(): Promise<Task[]> {
  //   const found = await this.tasksRepository.find();
  //   if (!found) {
  //     throw new NotFoundException('Tasks not found');
  //   } else {
  //     return found;
  //   }
  // }

  async getTasks(filterDto: GetTasksFilterDto): Promise<Task[]> {
    return this.tasksRepository.getTasks(filterDto);
  }

  createTask(CreateTaskDto: CreateTaskDto): Promise<Task> {
    return this.tasksRepository.createTask(CreateTaskDto);
  }

  async getTaskById(id: string): Promise<Task> {
    const found = await this.tasksRepository.findOneBy({ id });
    if (!found) {
      throw new NotFoundException('Task is not valid');
    } else {
      return found;
    }
  }

  async updateTaskStatus(id: string, status: TaskStatus): Promise<Task> {
    const task = await this.getTaskById(id);
    task.status = status;
    await this.tasksRepository.save(task);
    return task;
  }

  async deletetaskById(id: string): Promise<void> {
    // const found = await this.tasksRepository.delete(id);
    // console.log(found);
    const found = await this.tasksRepository.findOneBy({ id });
    if (!found) {
      throw new NotFoundException('Invalid task');
    } else {
      await this.tasksRepository.delete(found);
      console.log('Task Deleted');
    }
  }
}
