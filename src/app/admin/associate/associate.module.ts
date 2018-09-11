import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AssociateRoutingModule } from './/associate-routing.module';
import { FitnessComponent } from './fitness/fitness.component';
import { AlignmentComponent } from './alignment/alignment.component';
import { AssociateDataComponent } from './associate-data/associate-data.component';
import { AssociateTabBandComponent } from './associate-tab-band/associate-tab-band.component';
import { ChartModule } from 'angular-highcharts';
import { TooltipModule } from 'ngx-bootstrap';

@NgModule({
  imports: [
    CommonModule,
    AssociateRoutingModule,
    ChartModule,
    TooltipModule
  ],
  declarations: [FitnessComponent, AlignmentComponent, AssociateDataComponent, AssociateTabBandComponent]
})
export class AssociateModule { }
