import { Component, OnInit } from '@angular/core';
import { Todo } from './model/Todo';

@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.css']
})
export class ListTodosComponent implements OnInit {
  todos=[
    new Todo(1,'Learn to dance',false,new Date()),
    new Todo(2,'become an expert of angular',false,new Date()),
    new Todo(3,'visit Italy',false,new Date())
  ];
  
  constructor() { }

  ngOnInit(): void {
  }

}