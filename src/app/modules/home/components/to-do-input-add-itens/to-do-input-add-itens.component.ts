import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-to-do-input-add-itens',
  templateUrl: './to-do-input-add-itens.component.html',
  styleUrls: ['./to-do-input-add-itens.component.scss']
})
export class ToDoInputAddItensComponent {

  @Output() addItemEvent = new EventEmitter();

  addItemTaskList: string = '';
  constructor() { }

  submitItemTaskList(): void {
    this.addItemTaskList = this.addItemTaskList.trim();

    if (this.addItemTaskList) {
      this.addItemEvent.emit(this.addItemTaskList);
      this.addItemTaskList = '';
    }
  }

}
