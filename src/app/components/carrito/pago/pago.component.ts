import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-pago',
  templateUrl: './pago.component.html',
  styleUrls: ['./pago.component.scss']
})
export class PagoComponent implements OnInit {
  transferencia!: string;
  tipo!:any;

  constructor() { }

  ngOnInit(): void {
    this.transferencia =
      'Patronato Telas SPA'

  }

  radioId(e:any){
    console.log(e.value)
    this.tipo= e.value
  }

}
