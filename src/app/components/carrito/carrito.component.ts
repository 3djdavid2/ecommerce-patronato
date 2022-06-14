
import { Component, OnInit } from '@angular/core';
import { PerfilService } from '@app/services/perfil.service';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.scss']
})

export class CarritoComponent implements OnInit {

  carrito: any[] = [];

  constructor(private perfilService: PerfilService) { }

  ngOnInit(): void {

    this.perfilService.getCarrito()
      .subscribe({
        next: ((res) => {

          this.carrito.push(res.rows)
          this.carrito = this.carrito[0]
         
        })
      })

  }

}