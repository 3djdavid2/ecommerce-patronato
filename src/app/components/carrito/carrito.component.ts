
import { Component, OnInit } from '@angular/core';
import { AuthService } from '@app/services/auth.service';
import { PerfilService } from '@app/services/perfil.service';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.scss']
})

export class CarritoComponent implements OnInit {

  carrito: any[] = [];
  totalPagar!: any;
  cantidad!: number;
  cantProdTotal!: any;

  constructor(
    private perfilService: PerfilService,
    private authService: AuthService
  ) { }

  ngOnInit(): void {

    this.Carrito();
  }

  suma(id: number, cantActual: number, precioActual: number) {

    const cantidad = cantActual + 1
    const total = precioActual * cantidad
    const data = { id: id, cantidad: cantidad, total: total }

    this.perfilService.updateProdIdCarrito(data)
      .subscribe({
        next: ((res) => {
          console.log("update ok: ", res)
          if (res[0] == 1) {
            this.Carrito();
          }
        })
      })
  }

  resta(id: number, cantActual: number, precioActual: number) {
    if (cantActual > 1) {
      const cantidad = cantActual  - 1
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
          console.log("deletebyid es res: ", res)//'Producto Borrado'
          this.Carrito();

        })
      })

  }


  Carrito() {
    this.carrito = [];
    this.perfilService.getCarrito()
      .subscribe({
        next: ((res) => {
          this.carrito.push(res.rows)
          this.carrito = this.carrito[0]
          this.cantProdTotal = this.carrito.map(prod => prod.cantidad).reduce((prev, curr) => prev + curr, 0);
          this.totalPagar = this.carrito.map(prod => prod.total).reduce((prev, curr) => prev + curr, 0);
          this.authService.badgeCarritoSource.next(this.cantProdTotal)
        })
      })

  }


}