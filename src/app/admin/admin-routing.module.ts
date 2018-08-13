import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes, Router } from '@angular/router';

import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { RecruitmentLayoutComponent } from './recruitment/recruitment-layout/recruitment-layout.component';
import { RecruitmentAtsComponent } from './recruitment/recruitment-ats/recruitment-ats.component';
import { AlignmentLayoutComponent } from './alignment/alignment-layout/alignment-layout.component';
import { AluminiLayoutComponent } from './alumini/alumini-layout/alumini-layout.component';
import { CultureComponent } from './culture/culture/culture.component';

const routes: Routes = [
  { path: 'dashboard', component: AdminDashboardComponent },
  { path: 'ats', component: RecruitmentAtsComponent },
  { path: 'recruitment', component: RecruitmentLayoutComponent,loadChildren:'./recruitment/recruitment.module#RecruitmentModule'},
  { path: 'alignment', component: AlignmentLayoutComponent},
  { path: 'alumini', component: AluminiLayoutComponent},
  { path: 'culture', component: CultureComponent}
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],exports:[RouterModule],
  declarations: []
})
export class AdminRoutingModule { }
