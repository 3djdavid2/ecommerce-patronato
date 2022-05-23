
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//Components
import { TasksComponent } from './components/tasks/tasks.component'
import { PrivateTasksComponent } from './components/private-tasks/private-tasks.component'
import { SignupComponent } from './components/signup/signup.component'
import { SigninComponent } from './components/signin/signin.component'
import { ContactoComponent } from '../../src/app/pages/contacto/contacto.component';
import { HomeComponent } from '@app/pages/home/home.component';

import { AuthGuard } from './auth.guard'

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
    path: 'clientes',
    component: TasksComponent
  },
  {
    path: 'productos',
    component: PrivateTasksComponent,
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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
