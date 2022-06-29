
import { AfterViewInit, Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { AuthService } from '@app/services/auth.service';
import { PerfilService } from '@app/services/perfil.service';

export interface TablaProductos {
  id: number;
   producto: string;
  cantidad: number;
  precio: number;
  total: number;
  editarCant: string;
  borrarProd: string;
}
@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.scss']
})

export class CarritoComponent implements AfterViewInit {

  carrito: TablaProductos[] = [];
  totalPagar!: any;
  cantidad!: number;
  cantProdTotal!: any;

  displayedColumns: string[] = ['producto', 'cantidad', 'precio', 'total', 'editar', 'borrar'];
  dataSource: MatTableDataSource<TablaProductos>;



  constructor(
    private perfilService: PerfilService,
    private authService: AuthService,
   
  ) {

    this.dataSource = new MatTableDataSource()
  }


  ngAfterViewInit() {
    this.Carrito();
    this.dataSource = new MatTableDataSource(this.carrito)

  }


  suma(id: number, cantActual: number, precioActual: number) {

    const cantidad = cantActual + 1
    const total = precioActual * cantidad
    const data = { id: id, cantidad: cantidad, total: total }

    this.perfilService.updateProdIdCarrito(data)
      .subscribe({
        next: ((res) => {
          console.log("update ok: ")
          if (res[0] == 1) {
            this.Carrito();
          }
        })
      })
  }

  resta(id: number, cantActual: number, precioActual: number) {
    if (cantActual > 1) {
      const cantidad = cantActual - 1
      const total = precioActual * cantidad
      const data = { id: id, cantidad: cantidad, total: total }

      this.perfilService.updateProdIdCarrito(data)
        .subscribe({
          next: ((res) => {
            console.log("update ok")
            if (res[0] == 1) {
              this.Carrito();
            }
          })
        })


    }
  }

  deleteById(id: number) {

    this.perfilService.deleteProdIdCarrito(id)
      .subscribe({
        next: ((res) => {
          console.log('Producto Borrado')
          this.Carrito();

        })
      })

  }


  Carrito() {
    this.carrito = [];
    this.perfilService.getCarrito()
      .subscribe({
        next: ((res) => {

          this.carrito.push(...res.rows) //array
          this.dataSource = new MatTableDataSource<TablaProductos>(this.carrito);

          this.cantProdTotal = this.carrito.map(prod => prod.cantidad).reduce((prev, curr) => prev + curr, 0);
          this.totalPagar = this.carrito.map(prod => prod.total).reduce((prev, curr) => prev + curr, 0);
          this.authService.badgeCarritoSource.next(this.cantProdTotal)
        })
      })

  }

}