
import { Component, OnInit } from '@angular/core';
//
import { TasksService } from '../../services/tasks.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss']
})

export class TasksComponent implements OnInit {

  clientes: any = [];

  constructor(private tasksService: TasksService) { }

  ngOnInit(): void {

    this.tasksService.getClientes()
      .subscribe({
        next: (res) => {
          console.info("next ok client component", res)
          this.clientes = res;

        },
        error: (e) => {
          console.error("error aqui: ", e)
          alert("error")
        },
        complete: () => {
          console.info('complete')

        }
      })

  }

}