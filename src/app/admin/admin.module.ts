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
import { UserProfileComponent } from './user-profile/user-profile.component';
import { TabsModule, ModalModule } from 'ngx-bootstrap';
import { AtsTimelineComponent } from './recruitment/recruitment-ats/ats-timeline/ats-timeline.component';
import { ScrollToModule } from '@nicky-lenaers/ngx-scroll-to';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {RatingModule} from "ngx-rating";
import { MatInputModule, MatDialogModule,MatDatepickerModule, MatButtonModule,MatSelectModule } from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    StepsModule,
    ChartModule,
    TabsModule,
    ScrollToModule.forRoot(),
    RatingModule,
    ModalModule,
    MatInputModule,
    MatSelectModule,
    MatDatepickerModule
  ],
  declarations: [ AdminDashboardComponent, RecruitmentLayoutComponent, RecruitmentAtsComponent,
     AlignmentLayoutComponent, AluminiLayoutComponent, CultureComponent, UserProfileComponent,AtsTimelineComponent],

})
export class AdminModule { }