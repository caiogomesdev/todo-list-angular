import { Component, OnInit } from '@angular/core';
import { TaskList } from '../../model/task-list';

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.scss']
})
export class ToDoListComponent implements OnInit {
  taskList: Array<TaskList> = [];

  constructor() { }

  deleteItemTaskList(itemNumber: number): void {
    this.taskList.splice(itemNumber, 1);
  }

  deleteAllItemsTaskList(): void {
    const confirm = window.confirm('Você deseja excluir a lista?');
    if (confirm) this.taskList = [];
  }
  addItemTaskList(task: string): void {
    this.taskList.push({task, checked: false});
  }

  ngOnInit(): void {
    this.taskList.push({ task: 'qweqweqweq', checked: false });
  }

}
