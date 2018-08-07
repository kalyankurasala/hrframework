import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes, Router } from '@angular/router';

import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { RecruitmentLayoutComponent } from './recruitment/recruitment-layout/recruitment-layout.component';
import { RecruitmentAtsComponent } from './recruitment/recruitment-ats/recruitment-ats.component';

const routes: Routes = [
  { path: 'dashboard', component: AdminDashboardComponent },
  { path: 'ats', component: RecruitmentAtsComponent },
  { path: 'recruitment', component: RecruitmentLayoutComponent}
];


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],exports:[RouterModule],
  declarations: []
})
export class AdminRoutingModule { }
