import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Todo } from '../list-todos/model/Todo';
import { TodoDataService } from '../service/data/todo-data.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  id;
  todo:Todo=new Todo(1,"",false,new Date);
  constructor(private router:Router,private activatedRoute:ActivatedRoute,private todoService:TodoDataService) { }

  ngOnInit(): void {
    this.id=this.activatedRoute.snapshot.params["id"];
    if(this.id != -1){
    this.todoService.retrieveTodo("shaker",this.id).subscribe(
      response => {
        this.todo=response;
      }
    )
    }
  }


  saveTodo(){
    if(this.id==-1){
       this.todoService.createTodo("shaker",this.todo).subscribe(
         data=>{
           this.router.navigate(["/todos"]);
         }
       );
    }else{
    this.todoService.updateTodo("shaker",this.id,this.todo).subscribe(
      data => {
         this.router.navigate(["/todos"]);
      }
    );
    }
  }

}
