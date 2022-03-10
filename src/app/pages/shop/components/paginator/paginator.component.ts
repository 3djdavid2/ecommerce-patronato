import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
@Component({
  selector: 'app-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.scss']
})
export class PaginatorComponent implements OnInit {

  @Input() totProd!: number;
  @Input() itemsXPage!: number;

  @Output() cambioPagina: EventEmitter<any>

  pageCombo = [1, 2, 5, 10];
  sort = "nombreAsc";

  constructor() {
    this.cambioPagina = new EventEmitter();
  }

  ngOnInit(): void {

  }

  dataEventPaginador(event: PageEvent): PageEvent {

    const datos = {
      lowValue: event.pageIndex,
      highValue: event.pageSize
    }

    if (event.pageIndex == 0) {
      datos.lowValue = 0
    }

    datos.lowValue = event.pageIndex * event.pageSize

    this.cambioPagina.emit(datos)

    return event
  }



}
