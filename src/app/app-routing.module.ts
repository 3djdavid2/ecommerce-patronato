
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//CARRITO CLIENTE INSCRITO
import { CarritoComponent } from './components/carrito/carrito.component'
//PRODUCTOS CRUD ADMIN
import { ProductosCrudComponent } from './components/productos-crud/productos-crud.component'

import { SignupComponent } from './components/signup/signup.component'
import { SigninComponent } from './components/signin/signin.component'
import { ContactoComponent } from '../../src/app/pages/contacto/contacto.component';
import { HomeComponent } from '@app/pages/home/home.component';

//GUARDIANES
import { AuthGuard } from './auth.guard'
import { ProductComponent } from './pages/shop/components';
import { SucursalesComponent } from './pages/sucursales/sucursales.component';
import { RoleGuard } from './guards';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: "",
    children: [
      
      {
        path: 'shop',
        loadChildren: () => import('./pages/shop/shop.module').then(m => m.ShopModule)
      },
      {
        path:'perfil',
        loadChildren:()=> import('./pages/perfil/perfil.module').then(m=>m.PerfilModule),
        canActivate:[AuthGuard]
      },
      {
        path: 'demo',
        loadChildren: () => import('./pages/demo/demo.module').then(m => m.DemoModule)
      }]
  },

  {
    path: 'home',
    component: HomeComponent
  },

  {
    path: 'productoscrud',
    component: ProductosCrudComponent,
    canActivate: [RoleGuard],
    data:{expectedRole:'admin'},
  },
  {
    path: 'producto/:id',
    component: ProductComponent,

  },
  {
    path: 'carrito',
    component: CarritoComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'signin',
    component: SigninComponent
  },
  {
    path: 'signup',
    component: SignupComponent
  },
  {
    path: 'contacto',
    component: ContactoComponent
  },
  {
    path: 'sucursales',
    component: SucursalesComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
