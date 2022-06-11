import { Component, OnInit } from '@angular/core';
import { GetsService } from '@app/services/gets.service';
import { ActivatedRoute, ParamMap, Router } from '@angular/router'
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { DialogProductComponent } from '../dialog-product/dialog-product.component';
import { AuthService } from '@app/services/auth.service';


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

    this.GetProducto(this.id)

  }

  openDialog() {
    if (this.authService.verifyToken()) {
      const dialogConfig = new MatDialogConfig();
      dialogConfig.disableClose = false;
      dialogConfig.autoFocus = true;
      this.dialog.open(DialogProductComponent, dialogConfig);

    } else {

      this.router.navigate(['signin'])
    }
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

  GetProducto(id: number) {
    this.getService.getProducto(id)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.product = res;
          this.total = +this.cantidad * + this.product.precio;
        },
        error: (e) => {
          console.log(e);
        },
        complete: () => {
          console.info('producto complete')
        }
      })
  }


}
