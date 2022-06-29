import { Component, OnInit } from '@angular/core';
import { ControlItem } from '@app/models/frontend';
import { GetsService } from '@app/services/gets.service';
import { map } from 'rxjs';
@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss']
})
export class ShopComponent implements OnInit {

  products!: any[];
  marcas!: ControlItem[];
  categorias!: ControlItem[];

  pageSize: number = 4;
  totProd: number = 0;

  lowValue: number = 0;
  highValue: number = 0;


  constructor(
    private getService: GetsService
  ) {

  }

  ngOnInit(): void {

    this.getService.getAllCount()
      .subscribe({
        next: (res) => {
          this.totProd = res;
          this.GetProductos(0, this.pageSize);
        }
      })


    this.GetMarcas();
    this.GetCategorias();

  }



  paginacion(pag: any) {

    this.lowValue = pag.lowValue
    this.highValue = pag.highValue

    this.getService.getAllByPage(this.lowValue, this.highValue)

      .subscribe({
        next: (res: any) => {
          this.products = res.rows;

        },
        error: (e) => {
          console.log(e);
        },
        complete: () => {
          console.info('paginacion complete')
        }
      })
  }

  //Obtener productos por página desde el bd
  GetProductos(index: number, cant: number) {
    this.getService.getAllByPage(index, cant)
      .subscribe({
        next: (res: any) => {
          this.products = res.rows;
          console.log(this.products)

        },
        error: (e) => {
          console.log(e);
        },
        complete: () => {
          console.info('productos por pagina complete')
        }
      })
  }

  GetMarcas() {
    this.getService.getMarcas()
      .subscribe({
        next: (res) => {
          this.marcas = res
        },
        error: (e) => {
          console.log(e);
        },
        complete: () => {
          console.info('marcas complete')
        }
      })
  }

  //Obtener categorias desde la bd
  GetCategorias() {
    this.getService.getCategorias()
      .subscribe({
        next: (res) => {
          this.categorias = res
        },
        error: (e) => {
          console.log(e);
        },
        complete: () => {
          console.info('categorias complete')
        }
      })
  }


}
