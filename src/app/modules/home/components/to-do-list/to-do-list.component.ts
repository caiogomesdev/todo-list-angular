import { Component, DoCheck, OnInit } from '@angular/core';
import { TaskList } from '../../model/task-list';

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.scss']
})
export class ToDoListComponent implements OnInit, DoCheck {
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
  validationInput(task: string, index: number): void {
    if (!task.trim()) {
      const confirm = window.confirm('Você deseja apagar essa tarefa?');
      if (confirm) this.deleteItemTaskList(index);
    }
  }
  ngOnInit(): void {
    const taskList = localStorage.getItem('taskList') || '';
    this.taskList = JSON.parse(taskList);
  }
  ngDoCheck(): void {
    this.taskList.sort((first, last) => Number(first.checked) - Number(last.checked));
    if (this.taskList) localStorage.setItem('taskList', JSON.stringify(this.taskList));
  }
}
