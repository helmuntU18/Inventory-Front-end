import { Routes } from '@angular/router';
import { MercanciaComponent } from './features/inventory/components/mercancia/mercancia.component';
import { LayoutComponent } from './features/layout/layout.component';
import { ListUserComponent } from './features/users/components/list/list-user/list-user.component';

export const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: 'inventario', component: MercanciaComponent },
      {path: 'users', component: ListUserComponent },
      // { path: 'producto', component: ProductComponent },
      { path: '', redirectTo: 'inventario', pathMatch: 'full' },
    ],
  },
  { path: '**', redirectTo: '/inventario' }
];
