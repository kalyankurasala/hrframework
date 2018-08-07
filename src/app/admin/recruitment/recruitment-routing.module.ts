import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule, Routes, Router } from '@angular/router';
import {RecruitmentAtsComponent} from './recruitment-ats/recruitment-ats.component';

const routes: Routes = [
  {path:'ats',component:RecruitmentAtsComponent}
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports:[RouterModule],
  declarations: []
})
export class RecruitmentRoutingModule { }
