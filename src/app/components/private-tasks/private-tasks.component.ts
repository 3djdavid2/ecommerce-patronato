
import { Component, OnInit } from '@angular/core';
import { TasksService } from '../../services/tasks.service'
@Component({
  selector: 'app-private-tasks',
  templateUrl: './private-tasks.component.html',
  styleUrls: ['./private-tasks.component.scss']
})

export class PrivateTasksComponent implements OnInit {

  constructor(private tasksService: TasksService) { }

  productos: any = [];


  ngOnInit(): void {

    this.tasksService.getProductos()
      .subscribe({
        next: (res) => {

          console.log(" ok", res)
          this.productos = res;

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

