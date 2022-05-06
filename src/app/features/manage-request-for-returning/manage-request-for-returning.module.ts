import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ManageRequestForReturningRoutingModule } from './manage-request-for-returning-routing.module';
import { ManageRequestForReturningComponent } from './manage-request-for-returning/manage-request-for-returning.component';
import { ManageRequestTableComponent } from './manage-request-table/manage-request-table.component';
import { ShareModule } from 'src/app/shared/share/share.module';
import { ManageRequestFilterComponent } from './manage-request-filter/manage-request-filter.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';


@NgModule({
  declarations: [
    ManageRequestForReturningComponent,
    ManageRequestTableComponent,
    ManageRequestFilterComponent,
  ],
  imports: [
    CommonModule,
    ManageRequestForReturningRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatSelectModule,
    ShareModule
  ]
})
export class ManageRequestForReturningModule { }
