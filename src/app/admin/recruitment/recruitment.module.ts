import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecruitmentRoutingModule } from './/recruitment-routing.module';
import { ManageApplicantsComponent } from './manage-applicants/manage-applicants.component';
import { ManageJobsComponent } from './manage-jobs/manage-jobs.component';
import { ModalModule, TooltipModule } from 'ngx-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule, MatDialogModule, MatButtonModule, MatDatepickerModule, MatProgressBarModule, MatProgressSpinnerModule, MatSelectModule, MatSliderModule, MatSlideToggleModule } from '@angular/material';


@NgModule({
  imports: [
    CommonModule,
    RecruitmentRoutingModule,
    ModalModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatDialogModule,
    MatButtonModule,
    TooltipModule,
    MatDatepickerModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatSelectModule, MatSliderModule, MatSlideToggleModule
  ],
  declarations: [ManageApplicantsComponent, ManageJobsComponent],
})
export class RecruitmentModule {

}
