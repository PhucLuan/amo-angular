import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ManageAssignmentRoutingModule } from './manage-assignment-routing.module';
import { ManageAssignmentComponent } from './manage-assignment.component';
import { ManageAssignmentTableComponent } from './manage-assignment-table/manage-assignment-table.component';
import { ManageAssignmentFilterComponent } from './manage-assignment-filter/manage-assignment-filter.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatCardModule } from '@angular/material/card';
import { ShareModule } from 'src/app/shared/share/share.module';
import { XcirclebtnComponent } from 'src/app/shared/button/xcirclebtn/xcirclebtn.component';
import { AssignmentFormComponent } from './assignment-form/assignment-form.component';
import { MatSelectModule } from '@angular/material/select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatRadioModule } from '@angular/material/radio';
import { MatButtonModule } from '@angular/material/button';


@NgModule({
  declarations: [
    ManageAssignmentComponent, 
    ManageAssignmentTableComponent, 
    ManageAssignmentFilterComponent,
    XcirclebtnComponent,
    AssignmentFormComponent
  ],
  imports: [
    CommonModule,
    ManageAssignmentRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatCardModule,
    MatSelectModule,
    MatButtonModule,
    MatRadioModule,
    ShareModule
  ]
})
export class ManageAssignmentModule { }
