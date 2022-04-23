import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-to-do-input-add-itens',
  templateUrl: './to-do-input-add-itens.component.html',
  styleUrls: ['./to-do-input-add-itens.component.scss']
})
export class ToDoInputAddItensComponent implements OnInit {

  @Output() addItemEvent = new EventEmitter();

  addItemTaskList: string = '';
  constructor() { }

  ngOnInit(): void {
  }

  submitItemTaskList(): void {
    this.addItemEvent.emit(this.addItemTaskList);
    this.addItemTaskList = '';
  }

}
