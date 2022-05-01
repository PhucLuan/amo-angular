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


@NgModule({
  declarations: [ManageAssignmentComponent, ManageAssignmentTableComponent, ManageAssignmentFilterComponent],
  imports: [
    CommonModule,
    ManageAssignmentRoutingModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatCardModule,
    ShareModule
  ]
})
export class ManageAssignmentModule { }
