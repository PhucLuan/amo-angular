import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ManageAssignmentRoutingModule } from './manage-assignment-routing.module';
import { ManageAssignmentComponent } from './manage-assignment.component';
import { ManageAssignmentTableComponent } from './manage-assignment-table/manage-assignment-table.component';
import { ManageAssignmentFilterComponent } from './manage-assignment-filter/manage-assignment-filter.component';
import { ShareModule } from 'src/app/shared/share/share.module';
import { XcirclebtnComponent } from 'src/app/shared/button/xcirclebtn/xcirclebtn.component';
import { AssignmentFormComponent } from './assignment-form/assignment-form.component';
import { MatSelectModule } from '@angular/material/select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatRadioModule } from '@angular/material/radio';
import { MatButtonModule } from '@angular/material/button';
import { AssetPopupComponent } from './asset-popup/asset-popup.component';
import { UserPopupComponent } from './user-popup/user-popup.component';


@NgModule({
  declarations: [
    ManageAssignmentComponent, 
    ManageAssignmentTableComponent, 
    ManageAssignmentFilterComponent,
    XcirclebtnComponent,
    AssignmentFormComponent,
    AssetPopupComponent,
    UserPopupComponent
  ],
  imports: [
    CommonModule,
    ManageAssignmentRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatButtonModule,
    MatRadioModule,
    ShareModule
  ]
})
export class ManageAssignmentModule { }
