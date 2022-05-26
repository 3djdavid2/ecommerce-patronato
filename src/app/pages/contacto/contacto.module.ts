import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactoRoutingModule } from './contacto-routing.module';

import { ContactService } from '../../services/contact.service';

import { ReactiveFormsModule, FormsModule } from '@angular/forms';
// import { AutoFocusInputDirective } from '../../directivas/auto-focus-input.directive';

import { MatButtonModule } from '@angular/material/button';


@NgModule({
  declarations: [
    // AutoFocusInputDirective
  ],
  imports: [
    CommonModule,
    ContactoRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule
  ],
  providers: [ContactService]
})
export class ContactoModule { }
