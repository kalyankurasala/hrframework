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
import { TabsModule, RatingModule } from 'ngx-bootstrap';
import { AtsTimelineComponent } from './recruitment/recruitment-ats/ats-timeline/ats-timeline.component';
import { ScrollToModule } from '@nicky-lenaers/ngx-scroll-to';

@NgModule({
  imports: [
    CommonModule,
    AdminRoutingModule,
    StepsModule,
    ChartModule,
    TabsModule,
    ScrollToModule.forRoot(),
    RatingModule

  ],
  declarations: [AdminDashboardComponent, RecruitmentLayoutComponent, RecruitmentAtsComponent,
     AlignmentLayoutComponent, AluminiLayoutComponent, CultureComponent, UserProfileComponent,AtsTimelineComponent]
})
export class AdminModule { }