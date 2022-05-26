
import { Component, OnInit } from '@angular/core';
import { TasksService } from '../../services/tasks.service'

@Component({
  selector: 'app-productos-crud',
  templateUrl: './productos-crud.component.html',
  styleUrls: ['./productos-crud.component.scss']
})

export class ProductosCrudComponent implements OnInit {
  
  clientes: any = [];
  productos: any = [];
  
  constructor(private tasksService: TasksService) { }

  ngOnInit(): void {

    console.log("crud de productos aqui")

    // this.tasksService.getProductos()
    //   .subscribe({
    //     next: (res) => {

    //       console.log("private task ok", res)
    //       this.productos = res;

    //     },
    //     error: (e) => {
    //       console.error("error aqui: ", e)
    //       alert("error")
    //     },
    //     complete: () => {
    //       console.info('complete')


    //     }
    //   })

    // this.tasksService.getClientes()
    //   .subscribe({
    //     next: (res) => {
    //       console.info("next ok client component", res)
    //       this.clientes = res;

    //     },
    //     error: (e) => {
    //       console.error("error aqui: ", e)
    //       alert("error")
    //     },
    //     complete: () => {
    //       console.info('complete')

    //     }
    //   })



  }

}

