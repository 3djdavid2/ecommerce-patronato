import { Component, OnInit, Input } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { DialogProductComponent } from '../dialog-product/dialog-product.component';

import { Product } from '../../store/list';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})

export class ProductsComponent implements OnInit {

  //recibo la lista de productos desde el padre

  @Input() products ! : Product[]; 

  constructor(private dialog: MatDialog) {    
  }

  ngOnInit(): void {
    console.log("los productos: ", this.products);
  }

  openDialog(){
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = false;
    dialogConfig.autoFocus = true;

    this.dialog.open(DialogProductComponent, dialogConfig);
  }








}

