import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdministrationRoutingModule } from './/administration-routing.module';
import { UsersComponent } from './users/users.component';
import { SkillsComponent } from './skills/skills.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule, MatDatepickerModule, MatCheckboxModule, MatTableModule } from '@angular/material';
import { ModalModule, TooltipModule } from 'ngx-bootstrap';

@NgModule({
  imports: [
    CommonModule,
    AdministrationRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
     MatDatepickerModule,
     ModalModule, 
     TooltipModule,
     MatCheckboxModule,
     MatTableModule
  ],
  declarations: [UsersComponent, SkillsComponent],
  exports:[]
})
export class AdministrationModule { }
