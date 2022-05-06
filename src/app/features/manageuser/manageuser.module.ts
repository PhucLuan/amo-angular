import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ManageuserRoutingModule } from './manageuser-routing.module';
import { ManageUserTableFilterComponent } from './manage-user-table-filter/manage-user-table-filter.component';
import { ShareModule } from 'src/app/shared/share/share.module';
import { ManageUserTableComponent } from './manage-user-table/manage-user-table.component';
import { ManageuserComponent } from './manageuser.component';
import { MatSelectModule } from '@angular/material/select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ManageuserFormComponent } from './manageuser-form/manageuser-form.component';
import { MatRadioModule } from '@angular/material/radio';
import { UserDeleteModalComponent } from './user-delete-modal/user-delete-modal.component';


@NgModule({
  declarations: [
    ManageuserComponent,
    ManageUserTableFilterComponent,
    ManageUserTableComponent,
    ManageuserFormComponent,
    UserDeleteModalComponent
  ],
  imports: [
    CommonModule,
    ManageuserRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatRadioModule,
    ShareModule
  ]
})
export class ManageuserModule { }
