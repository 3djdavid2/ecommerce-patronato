import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ShopRoutingModule } from './shop-routing.module';

import { ShopComponent } from './shop.component';
import { FilterComponent } from './components/filter/filter.component';
import { PaginatorComponent } from './components/paginator/paginator.component';
import { ProductComponent } from './components/product/product.component';
import { ProductsComponent } from './components/products/products.component';
import { SearchComponent } from './components/search/search.component';

import { MatButtonModule } from '@angular/material/button';

import { FormFieldModule } from '@app/shared/controls';
import { ButtonModule } from '@app/shared/buttons';
import { SpinnerModule } from '@app/shared/indicators';
import { ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { SelectModule } from '@app/shared/controls';

import { MatPaginatorModule, MatPaginatorIntl } from '@angular/material/paginator';
import { MatPaginationService } from '../../services/matpaginationtranslate.service';
import { DialogProductComponent } from './components/dialog-product/dialog-product.component';
import { MatDialogModule } from '@angular/material/dialog'

@NgModule({
  declarations: [
    ShopComponent,
    FilterComponent,
    PaginatorComponent,
    ProductComponent,
    ProductsComponent,
    SearchComponent,
    DialogProductComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    ShopRoutingModule,
    FormFieldModule,
    ButtonModule,
    SpinnerModule,
    ReactiveFormsModule,
    MatCardModule,
    MatButtonModule,
    MatListModule,
    SelectModule,
    MatPaginatorModule,
    MatDialogModule,
   
    

  ],
  providers: [
    { provide: MatPaginatorIntl, useClass: MatPaginationService }
  ],
  bootstrap: [ShopComponent],
  entryComponents: [DialogProductComponent]

})
export class ShopModule { }
