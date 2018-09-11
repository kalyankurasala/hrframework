import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { FitnessComponent } from './fitness/fitness.component';
import { AlignmentComponent } from './alignment/alignment.component';
import { AssociateDataComponent } from './associate-data/associate-data.component';

const route: Routes = [
  { path: '', redirectTo: 'data', pathMatch: 'full' },
  { path: 'data', component: AssociateDataComponent },
  { path: 'fitness', component: FitnessComponent },
  { path: 'alignment', component: AlignmentComponent }
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(route)
  ],
  exports: [RouterModule],
  declarations: []
})
export class AssociateRoutingModule { }
