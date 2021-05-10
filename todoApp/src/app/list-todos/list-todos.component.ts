import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TodoDataService } from '../service/data/todo-data.service';
import { Todo } from './model/Todo';

@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.css']
})
export class ListTodosComponent implements OnInit {
  todos:Todo[];

  message;
  
  constructor(private router:Router,private todoService:TodoDataService) { }
 
  ngOnInit(): void {
    this.refreshTodos();
  }

 refreshTodos(){
    this.todoService.retrieveAllTodos("shaker").subscribe(
      response => {
        this.todos=response;
      }
    );
  }

  deleteTodo(id){
    this.todoService.deleteTodo('shaker',id).subscribe(
      Response =>{
        this.message="Delete of "+id+" todo item";
        //retrieve todos again from server
        this.refreshTodos();
      }
    )
  }

  updateTodo(id){
     this.router.navigate([`todos/${id}`]);
  }

  addTodo(){
    this.router.navigate(["/todos",-1]);
  }
}
