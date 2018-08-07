import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AdminRoutingModule } from './/admin-routing.module';
import { RecruitmentLayoutComponent } from './recruitment/recruitment-layout/recruitment-layout.component';
import {StepsModule} from 'primeng/steps';
import { RecruitmentAtsComponent } from './recruitment/recruitment-ats/recruitment-ats.component';

@NgModule({
  imports: [
    CommonModule,
    AdminRoutingModule,
    StepsModule,
  ],
  declarations: [ AdminDashboardComponent, RecruitmentLayoutComponent,RecruitmentAtsComponent]
})
export class AdminModule { }