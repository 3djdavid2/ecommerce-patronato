import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatTabsModule } from '@angular/material/tabs';
import { MatTableModule } from '@angular/material/table';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';


import { PerfilRoutingModule } from './perfil-routing.module';
import { PerfilComponent } from './perfil.component';
import { ButtonsModule } from '@app/shared';
import { ComprasComponent } from './compras/compras.component';


@NgModule({
  declarations: [
    PerfilComponent,
    ComprasComponent
  ],
  imports: [
    CommonModule,
    PerfilRoutingModule,
    MatTabsModule,
    FormsModule,
    ReactiveFormsModule,
    ButtonsModule,
    MatTableModule,
    MatExpansionModule,
    MatIconModule,
   
  ]
})
export class PerfilModule { }
