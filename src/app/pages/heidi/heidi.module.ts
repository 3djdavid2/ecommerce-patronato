import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeidiRoutingModule } from './heidi-routing.module';
import { HeidiComponent } from './heidi.component';


@NgModule({
  declarations: [
    HeidiComponent
  ],
  imports: [
    CommonModule,
    HeidiRoutingModule
  ]
})
export class HeidiModule { }
