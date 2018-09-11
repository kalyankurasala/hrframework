import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AssociateRoutingModule } from './/associate-routing.module';
import { FitnessComponent } from './fitness/fitness.component';
import { AlignmentComponent } from './alignment/alignment.component';
import { AssociateDataComponent } from './associate-data/associate-data.component';
import { AssociateTabBandComponent } from './associate-tab-band/associate-tab-band.component';

@NgModule({
  imports: [
    CommonModule,
    AssociateRoutingModule
  ],
  declarations: [FitnessComponent, AlignmentComponent, AssociateDataComponent, AssociateTabBandComponent]
})
export class AssociateModule { }
