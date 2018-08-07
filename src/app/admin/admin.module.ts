import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AdminRoutingModule } from './/admin-routing.module';
//import { AdminheaderComponent } from './adminheader/adminheader.component';

@NgModule({
  imports: [
    CommonModule,
    AdminRoutingModule
  ],
  declarations: [ AdminDashboardComponent]
})
export class AdminModule { }