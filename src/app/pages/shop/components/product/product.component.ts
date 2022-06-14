import { Component, OnInit } from '@angular/core';
import { GetsService } from '@app/services/gets.service';
import { ActivatedRoute, ParamMap, Router } from '@angular/router'
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { DialogProductComponent } from '../dialog-product/dialog-product.component';
import { AuthService } from '@app/services/auth.service';
import { PerfilService } from '@app/services/perfil.service';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  product: any;
  id: any;
  cantidad: number;
  precio!: number;
  total: number;

  constructor(
    private perfilService: PerfilService,
    private dialog: MatDialog,
    private route: ActivatedRoute,
    private router: Router,
    private getService: GetsService,
    private authService: AuthService
  ) {
    this.product = ''
    this.total = 0
    this.cantidad = 1
  }

  ngOnInit(): void {

    this.route.paramMap.subscribe((params: ParamMap) => {
      this.id = params.get('id');
    })

    this.GetProducto(this.id, false)

  }

  openDialog(id:any) {
    if (this.authService.verifyToken()) {
      const dialogConfig = new MatDialogConfig();
      dialogConfig.disableClose = false;
      dialogConfig.autoFocus = true;
      this.dialog.open(DialogProductComponent, dialogConfig);

      this.GetProducto(id, true)
      

    } else {

      this.router.navigate(['signin'])
    }
  }

  createCarrito(product: any) {

    // let cant = 1; //la cantidad en product depende de la seleccion de + y - del html

    this.perfilService.createCarrito(product.id, product.nombre, product.precio, this.cantidad, this.total)
      .subscribe({
        next: (res: any) => {
          console.log("Carrito creado desde product!", res)
        },
        error: (e: any) => {
          console.log("el error es:", e)
        },
        complete: () => {
          console.info('completed')
        }
      })

  }


  GetProducto(id: number, agregarAlCarrito:boolean) {
    this.getService.getProducto(id)
      .subscribe({
        next: (res) => {
          
          this.product = res;
          this.total = +this.cantidad * + this.product.precio;
          if(agregarAlCarrito){

            this.createCarrito(res);
          }
        },
        error: (e) => {
          console.log(e);
        },
        complete: () => {
          console.info('producto complete')
        }
      })
  }

  
  suma() {
    this.cantidad += 1;
    this.total = +this.cantidad * + this.product.precio;
  }

  resta() {
    if (this.cantidad > 1) {
      this.cantidad -= 1;
      this.total = +this.cantidad * + this.product.precio;
    }
  }


}
