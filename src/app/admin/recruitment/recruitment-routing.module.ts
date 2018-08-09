import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule, Routes, Router } from '@angular/router';
import { ManageApplicantsComponent } from './manage-applicants/manage-applicants.component';
import { ManageJobsComponent } from './manage-jobs/manage-jobs.component';

const routes: Routes = [
  { path: 'manage-applicants',component: ManageApplicantsComponent },
  { path: 'manage-jobs',component: ManageJobsComponent },

];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule],
  declarations: []
})
export class RecruitmentRoutingModule { }
