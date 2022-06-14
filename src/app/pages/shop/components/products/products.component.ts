import { Component, OnInit, Input } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { DialogProductComponent } from '../dialog-product/dialog-product.component';

import { Product } from '../../store/list';
import { PerfilService } from '@app/services/perfil.service';
import { AuthService } from '@app/services/auth.service';
import { Router } from '@angular/router';
import { GetsService } from '@app/services/gets.service';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})

export class ProductsComponent implements OnInit {

  //recibo la lista de productos desde el padre
  @Input() products !: Product[];


  pEmail: any;
  
  constructor(

    private dialog: MatDialog,
    private perfilService: PerfilService,
    public authService: AuthService,
    private getService: GetsService,
    private router: Router

  ) {

    this.pEmail = ''

  }

  ngOnInit(): void {

  }

  async openDialog(id: number) {

    if (this.authService.verifyToken()) {
      const dialogConfig = new MatDialogConfig();
      dialogConfig.disableClose = false;
      dialogConfig.autoFocus = true;
      this.dialog.open(DialogProductComponent, dialogConfig);

      this.GetProducto(id)
      this.getEmail();

    } else {

      this.router.navigate(['signin'])
    }
  }



  createCarrito(product: any) {

    let cant = 1;

    this.perfilService.createCarrito(product.id, product.nombre, product.precio, cant, product.precio)
      .subscribe({
        next: (res: any) => {
          console.log("Carrito creado!", res)
        },
        error: (e: any) => {
          console.log("el error es:", e)
        },
        complete: () => {
          console.info('completed')
        }
      })

  }

  GetProducto(id: number) {
    this.getService.getProducto(id)
      .subscribe({
        next: (res) => {

          this.createCarrito(res);
        },
        error: (e) => {
          console.log(e);
        },
        complete: () => {
          console.info('producto complete');
        }
      })
  }

  getEmail() {
    this.authService.email$
      .subscribe({
        next: (res: any) => {
          this.pEmail = res.email
        },
        error: (e: any) => {
          console.log("el error es:", e)
        },
        complete: () => {
          console.info('completed')
        }
      })
  }










}

