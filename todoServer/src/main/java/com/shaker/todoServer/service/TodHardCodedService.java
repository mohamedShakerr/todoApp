package com.shaker.todoServer.service;

import com.shaker.todoServer.entity.Todo;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@Service
public class TodHardCodedService {

    private static List<Todo> todos=new ArrayList<>();
    private static int idCounter=0;

    static {
        todos.add(new Todo(++idCounter,"shaker","Learn to dance",new Date(),false));
        todos.add(new Todo(++idCounter,"shaker","Learn about microservices",new Date(),false));
        todos.add(new Todo(++idCounter,"shaker","Learn about angular",new Date(),false));
    }

    public List<Todo> findAll(){
        return todos;
    }

    public Todo deleteById(long id){
        Todo todo=findById(id);
        if(todo != null) {
            todos.remove(todo);
            return todo;
        }
        return null;
    }

    public Todo findById(long id){
        for (Todo todo:todos){
            if(todo.getId()==id){
                return todo;
            }
        }
        return null;
    }

    public Todo save(Todo todo){
        if (todo.getId()==-1){
            todo.setId(++idCounter);
            todos.add(todo);
        }else {
            deleteById(todo.getId());
            todos.add(todo);
        }
        return todo;
    }

}
