import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecruitmentRoutingModule } from './/recruitment-routing.module';
import { ManageApplicantsComponent } from './manage-applicants/manage-applicants.component';
import { ManageJobsComponent } from './manage-jobs/manage-jobs.component';
import { ModalModule } from 'ngx-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    RecruitmentRoutingModule,
    ModalModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  declarations: [ManageApplicantsComponent, ManageJobsComponent]
})
export class RecruitmentModule { 

}
