import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecruitmentRoutingModule } from './/recruitment-routing.module';
import { ManageApplicantsComponent } from './manage-applicants/manage-applicants.component';
import { ManageJobsComponent } from './manage-jobs/manage-jobs.component';

@NgModule({
  imports: [
    CommonModule,
    RecruitmentRoutingModule
  ],
  declarations: [ ManageApplicantsComponent, ManageJobsComponent]
})
export class RecruitmentModule { }
