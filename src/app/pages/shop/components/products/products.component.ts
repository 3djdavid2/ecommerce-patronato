import { Component, OnInit, Input } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { DialogProductComponent } from '../dialog-product/dialog-product.component';

import { Product } from '../../store/list';
import { PerfilService } from '@app/services/perfil.service';
import { AuthService } from '@app/services/auth.service';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})

export class ProductsComponent implements OnInit {
  //recibo la lista de productos desde el padre
  productId!: number;
  cantidad!: number;
  @Input() products !: Product[];
  pEmail: any;

  constructor(
    private dialog: MatDialog,
    private perfilService: PerfilService,
    public authService: AuthService
  ) {
    this.pEmail = ''

  }

  ngOnInit(): void { 
  
  }

  openDialog(id: number) {
   
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = false;
    dialogConfig.autoFocus = true;
    this.dialog.open(DialogProductComponent, dialogConfig);

    this.productId = id
    this.createCarrito();
  }

  createCarrito() { 

    this.getEmailservice();

    this.perfilService.createCarrito(this.pEmail,this.productId, 1)
    .subscribe({
      next: (res: any) => {
        console.log("el res es:,", res)
        
      },
      error: (e: any) => {
        console.log("el error es:", e)
      },
      complete: () => {
        console.info('completed')
      }
    }) 
  }

  getEmailservice(){
    this.authService.email$
    .subscribe({
      next: (res: any) => {
        console.log("el res es:,", res)
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

