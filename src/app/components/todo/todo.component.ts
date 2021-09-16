import { Component, OnInit } from '@angular/core';
import { ToDo } from 'src/app/models/todo';
import { TodoService } from 'src/app/services/todo.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  todos:ToDo[]=[];
  constructor(private todoService: TodoService, private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {

    this.activatedRoute.params.subscribe((params)=>{
      if(params['Id']){
        this.getTodosById(params['Id']);
      }
    });

    this.getTodos();

  }

  getTodos() {
    this.todoService.getTodos().subscribe((response) => {
      this.todos = response.data
      console.log(response.data);
    });
  }

  getTodosById(Id: number) {
    this.todoService.getToDoById(Id).subscribe((response) => {
      this.todos = response.data
      console.log(response.data);
    });
  }
}
