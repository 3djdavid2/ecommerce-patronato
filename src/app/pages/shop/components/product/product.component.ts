import { Component, OnInit } from '@angular/core';
import { GetsService } from '@app/services/gets.service';
import { ActivatedRoute, ParamMap } from '@angular/router'

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  product:any;
  id: any;
  constructor(private route: ActivatedRoute, private getService: GetsService) {
    this.product= ''
   }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.id = params.get('id');
    })
  
    this.GetProducto(this.id)
  }

  //Obtener productos por página desde el bd
  GetProducto(id: number) {
    this.getService.getProducto(id)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.product=res
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
