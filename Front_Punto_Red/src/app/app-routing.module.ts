import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NavComponent } from './nav/nav.component';
import { SuppliersComponent } from './suppliers/suppliers.component';
import { BuyReloadsComponent } from './buy-reloads/buy-reloads.component';
import { TransactionComponent } from './transaction/transaction.component';

// Definimos las rutas
const routes: Routes = [
  // Ruta para la autenticación (sin navegación)
  { path: 'auth', component: AuthComponent },
  
  // Ruta principal del dashboard con navegación compartida
  {
    path: 'dashboard',
    component: DashboardComponent,
    children: [
      { path: 'suppliers', component: SuppliersComponent },
      { path: 'buy_reloads', component: BuyReloadsComponent },
      { path: 'transaction', component: TransactionComponent },
      { path: '', redirectTo: '/dashboard', pathMatch: 'full' } // Ruta predeterminada
    ]
  },
  
  // Ruta comodín (si hay alguna ruta incorrecta)
  { path: '**', redirectTo: '/auth' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
