import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ControlEntities } from '@app/shared/utils/form';
import { ControlItem } from '@app/models/frontend';
import { HttpParams } from '@angular/common/http';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import * as fromList from '../../store/list';
// import * as fromRoot from '@app/store';
import { MatListOption } from '@angular/material/list';


@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit, OnDestroy {

  @Input() dictionaries !: any| null;
  @Input() marca !: ControlItem[] | null;
  @Input() categories !: ControlItem[] | null;

  form!: FormGroup;
  controls !: ControlEntities;
  items !: ControlItem[];


  paginatorParams !: HttpParams;

  private destroy = new Subject<any>();

  constructor(

    private fb: FormBuilder

  ) { }

  ngOnInit(): void {

    let data = new HttpParams();
    data.set('page', '2')
    this.paginatorParams = data;


    this.categories = this.dictionaries?.categories.controlItems as ControlItem[];
    this.marca = this.dictionaries?.marca.controlItems as ControlItem[];



    this.items = [
      { value: 'nombre', label: 'Nombre' },
      { value: 'precio', label: 'Precio' },
      { value: 'descripcion', label: 'Descripcion' },
    ]


    this.form = this.fb.group({
      sort: [null, {
        updateOn: 'change', validators: []
      }],
      categoria: null,
      marca: null
    })

    this.controls = {
      sort: {
        items: this.items,
        changed: () => {


          const orden= this.form.value.sort

          // this.paginatorParams = this.paginatorParams.delete('sort');
          // this.paginatorParams = this.paginatorParams.set('sort', orden);

          
        }
      },
    }
  }

  onCategoriaSelectionChange(ob: MatListOption[]) {

    // this.paginatorParams = this.paginatorParams.delete('categoria');
    // this.paginatorParams = this.paginatorParams.set('categoria', this.form.get('categoria')?.value);

    const categoriaSel= ob.map(o=>o.value)[0] //generic
    
  }

  onMarcaSelectionChange(ob: MatListOption[]) {

    this.paginatorParams = this.paginatorParams.delete('marca');
    this.paginatorParams = this.paginatorParams.set('marca', this.form.get('marca')?.value);

    const marcaSel= ob.map(o=>o.value)[0] //F4
    
    
    
  }

  ngOnDestroy(): void {
    this.destroy.next(null);
    this.destroy.complete();
  }

}

