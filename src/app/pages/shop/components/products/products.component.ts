import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../../store/list';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})

export class ProductsComponent implements OnInit {

  //recibo la lista de productos desde el padre

  @Input() products ! : Product[]; 

  constructor() {    
  }

  ngOnInit(): void {
  console.log("los productos: ", this.products);
  }







}

