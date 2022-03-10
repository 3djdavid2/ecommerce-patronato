import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeidiComponent } from './heidi.component'

const routes: Routes = [
  {
    path: '',
    component: HeidiComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HeidiRoutingModule { }
