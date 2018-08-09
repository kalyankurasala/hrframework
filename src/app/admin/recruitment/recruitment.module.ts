import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecruitmentRoutingModule } from './/recruitment-routing.module';
import { ManageApplicantsComponent } from './manage-applicants/manage-applicants.component';

@NgModule({
  imports: [
    CommonModule,
    RecruitmentRoutingModule
  ],
  declarations: [ ManageApplicantsComponent]
})
export class RecruitmentModule { }
