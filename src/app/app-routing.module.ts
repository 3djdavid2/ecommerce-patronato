
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//CARRITO CLIENTE INSCRITO
import { CarritoComponent } from './components/carrito/carrito.component'
//PRODUCTOS CRUD ADMIN
import { ProductosCrudComponent } from './components/productos-crud/productos-crud.component'

//
import { SignupComponent } from './components/signup/signup.component'
import { SigninComponent } from './components/signin/signin.component'
import { ContactoComponent } from '../../src/app/pages/contacto/contacto.component';
import { HomeComponent } from '@app/pages/home/home.component';
import { SucursalesComponent } from './pages/sucursales/sucursales.component';

//GUARDIANES
import { AuthGuard } from './auth.guard'
import { AdminGuard } from './admin.guard'

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
        path: 'heidi',
        loadChildren: () => import('./pages/heidi/heidi.module').then(m => m.HeidiModule)
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
    path: 'productos',
    component: ProductosCrudComponent,
    // canActivate: [AdminGuard]
  },
  {
    path: 'carrito',
    component: CarritoComponent,
    // canActivate: [AuthGuard]
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
