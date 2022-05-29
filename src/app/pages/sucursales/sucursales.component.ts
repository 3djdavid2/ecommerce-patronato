import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'sucursales',
  templateUrl: './sucursales.component.html',
  styleUrls: ['./sucursales.component.scss']
})
export class SucursalesComponent implements OnInit {

  tiendas: any[];

  constructor() {
    this.tiendas = [
      {
        id: 1,
        lugar: 'Quilpué',
        linkDireccion: 'https://www.google.cl/maps/place/Gonzalo+Bofill+695/@-33.0457651,-71.4432596,20z/data=!4m6!3m5!1s0x9689d91b6ab986e1:0x5477a3a2b11ca78d!4b1!8m2!3d-33.0449875!4d-71.443231?hl=es&authuser=0',
        direccion: 'Gonzalo Bofill de Caso 695 (Al lado de Esval calle Claudio Vicuña)',
        linkWhatsApp: 'https://wa.me/56947726871',
        WhatsApp: ' +569 4772 6871'
      },
      {
        id: 2,
        lugar: 'Viña del Mar',
        linkDireccion: 'https://www.google.cl/maps/place/Av.+Valpara%C3%ADso+791,+Vi%C3%B1a+del+Mar,+Valpara%C3%ADso/@-33.0252466,-71.5504851,19z/data=!4m13!1m7!3m6!1s0x9689de0a9560b671:0x4e3d009b9badd242!2sAv.+Valpara%C3%ADso+791,+Vi%C3%B1a+del+Mar,+Valpara%C3%ADso!3b1!8m2!3d-33.0252466!4d-71.5501598!3m4!1s0x9689de0a9560b671:0x4e3d009b9badd242!8m2!3d-33.0252466!4d-71.5501598?hl=es&authuser=0',
        direccion: 'Av. Valparaíso 791 (Al lado de Bomberos)',
        linkWhatsApp: 'https://wa.me/56963892893',
        WhatsApp: ' +569 6389 2893'
      },
      {
        id: 3,
        lugar: 'Quillota',
        linkDireccion: 'https://www.google.cl/maps/place/Chacabuco+137,+Quillota,+Valpara%C3%ADso/@-32.878202,-71.2466532,17z/data=!3m1!4b1!4m5!3m4!1s0x9689cd9cb8c636a7:0x2a724f1346461aca!8m2!3d-32.878202!4d-71.2444645?hl=es-419&authuser=0',
        direccion: 'Chacabuco 137',
        linkWhatsApp: 'https://wa.me/56968682489',
        WhatsApp: '+569 6868 2489'
      },


    ]
  }

  ngOnInit(): void {
    

  }

}
