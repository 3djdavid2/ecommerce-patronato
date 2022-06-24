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

  result: any;

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
        res[compra.ordenPedido] = { ordenPedido: compra.ordenPedido, total: 0 };
        result.push(res[compra.ordenPedido])
      }
      res[compra.ordenPedido].total += compra.total;
      return res
    }, {});


    this.dataSource = this.result = result
    console.log("resultado es: ", this.result)

  }

  onClickOrden(orden:any){
    console.log(orden)
  }



}
