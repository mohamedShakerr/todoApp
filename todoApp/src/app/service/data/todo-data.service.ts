import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Todo } from 'src/app/list-todos/model/Todo';

@Injectable({
  providedIn: 'root'
})
export class TodoDataService {
//"eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJzaGFrZXIiLCJleHAiOjE2MjEzNzI2NjEsImlhdCI6MTYyMDc2Nzg2MX0.NyIE-3G2swOeOz8n48NHHMlmsNdvOk4g7URJPH66ux8SUSNuexdJYKxATxfGoYOUuYEPGsfRI6sZgJOwZuqWXg"
  constructor(private http:HttpClient) { }

  retrieveAllTodos(username:string){
   
    return this.http.get<Todo[]>(`http://localhost:8080/users/${username}/todos`);
  }

  deleteTodo(username,id){
    return this.http.delete(`http://localhost:8080/users/${username}/todos/${id}`);
  }

  retrieveTodo(username,id){
    return this.http.get<Todo>(`http://localhost:8080/users/${username}/todos/${id}`);
  }

  updateTodo(username,id,todo){
    return this.http.put(`http://localhost:8080/users/${username}/todos/${id}`,todo);
  }

  createTodo(username,todo){
    return this.http.post(`http://localhost:8080/users/${username}/todos`,todo);
  }

  
}
