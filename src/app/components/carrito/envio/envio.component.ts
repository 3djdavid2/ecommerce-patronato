import { Component, OnInit } from '@angular/core';


interface Tienda {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-envio',
  templateUrl: './envio.component.html',
  styleUrls: ['./envio.component.scss']
})
export class EnvioComponent implements OnInit {
  
  selected: string;
  tiendas: Tienda[];

  selectedRadioGroup!:string;
  selectedRadioGroupQuien!:string;
  selectedRadioGroupTipoDoc!:string;

  constructor() {
    this.selected = ''
    this.tiendas = [
      { value: 'quilpue-0', viewValue: 'Quilpue' },
      { value: 'vina-1', viewValue: 'Viña Del Mar' },
      { value: 'quillota-2', viewValue: 'Quillota' }
    ];
  }

  ngOnInit(): void {

  }

}
