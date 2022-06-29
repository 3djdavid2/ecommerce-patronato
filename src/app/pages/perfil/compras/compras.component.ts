import { Component, OnInit } from '@angular/core';
import { PerfilService } from '@app/services/perfil.service';

export interface TablaDetalles {
  ordenPedido: string;
  fechaCompra: string;
  producto: string;
  cantidad: number;
  precio: number;
  subTotal: number;
}



@Component({
  selector: 'app-compras',
  templateUrl: './compras.component.html',
  styleUrls: ['./compras.component.scss'],

})
export class ComprasComponent implements OnInit {


  productos!: any[];
  ordenes!: any;

  dataSource!: TablaDetalles[];
  columnsToDisplay = ['ordenPedido', 'fechaCompra', 'cantidad', 'total'];
  columnsToDisplayWithExpand = [...this.columnsToDisplay, 'expand'];
  expandedElement: any;
  element!: any;


  constructor(
    private perfilService: PerfilService
  ) {


  }

  ngOnInit(): void {
    this.perfilService.getCompras()
      .subscribe({
        next: (res: any) => {
          this.dataSource = res.rows
          this.productos = res.rows
          this.agrupaOrden(res.rows)

        },
        error: (e: any) => {
          console.log("el error es:", e)
        },
        complete: () => {
          console.info('completed')
        }
      })
  }


  agrupaOrden(array: any): any {
    var result: any = [];
    array.reduce((res: any, compra: any) => {

      if (!res[compra.ordenPedido]) {

        res[compra.ordenPedido] = {
          ordenPedido: compra.ordenPedido,
          fechaCompra: compra.sesion,
          cantidad: 0,
          total: 0
        };

        result.push(res[compra.ordenPedido])
      }
      res[compra.ordenPedido].total += compra.total;
      res[compra.ordenPedido].cantidad += compra.cantidad;
      return res
    }, {});


    this.dataSource = result


  }

  onClickOrden(orden: any) {
    this.ordenes = this.productos.filter(obj => {
      return obj.ordenPedido === orden
    })

  }


}
