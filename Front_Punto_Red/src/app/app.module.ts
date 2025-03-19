import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AuthComponent } from './auth/auth.component';
import { SuppliersComponent } from './suppliers/suppliers.component';
import { BuyReloadsComponent } from './buy-reloads/buy-reloads.component';
import { TransactionComponent } from './transaction/transaction.component';
import { AppRoutingModule } from './app-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NavComponent } from './nav/nav.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { RecargasBackendService } from './servicio/recargas-backend.service';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    SuppliersComponent,
    BuyReloadsComponent,
    TransactionComponent,
    DashboardComponent,
    NavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [RecargasBackendService],
  bootstrap: [AppComponent]
})
export class AppModule { }
