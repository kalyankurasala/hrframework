import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AdminRoutingModule } from './/admin-routing.module';
import { RecruitmentLayoutComponent } from './recruitment/recruitment-layout/recruitment-layout.component';
import { StepsModule } from 'primeng/steps';
import { RecruitmentAtsComponent } from './recruitment/recruitment-ats/recruitment-ats.component';
import { AlignmentLayoutComponent } from './alignment/alignment-layout/alignment-layout.component';
import { AluminiLayoutComponent } from './alumini/alumini-layout/alumini-layout.component';
import { CultureComponent } from './culture/culture/culture.component';
import { ChartModule } from 'angular-highcharts';

@NgModule({
  imports: [
    CommonModule,
    AdminRoutingModule,
    StepsModule,
    ChartModule
  ],
  declarations: [AdminDashboardComponent, RecruitmentLayoutComponent, RecruitmentAtsComponent, AlignmentLayoutComponent, AluminiLayoutComponent, CultureComponent]
})
export class AdminModule { }