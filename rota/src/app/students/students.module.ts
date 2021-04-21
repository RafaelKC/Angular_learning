import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatListModule} from '@angular/material/list'; 
import {MatGridListModule} from '@angular/material/grid-list'; 

import { StudentsComponent } from './students.component';
import { StudentsFormsComponent } from './students-forms/students-forms.component';
import { StudentsDateilsComponent } from './students-dateils/students-dateils.component';
import { StudentsRoutingModule } from './students-routing.module';
import { StudentsService } from './students.service';
import { StudentsDeactivateGuard } from '../guards/students-deactivate.guard';
import { StudentsDatailResolver } from './guards/students-detail.resolver';


@NgModule({
  declarations: [
    StudentsComponent,
    StudentsFormsComponent,
    StudentsDateilsComponent
  ],
  imports: [
    CommonModule,
    StudentsRoutingModule,
    MatListModule,
    MatGridListModule
  ],
  providers: [
    StudentsService,
    StudentsDeactivateGuard,
    StudentsDatailResolver
  ]
})
export class StudentsModule { }
