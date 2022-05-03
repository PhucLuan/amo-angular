import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ManageuserRoutingModule } from './manageuser-routing.module';
import { ManageUserTableFilterComponent } from './manage-user-table-filter/manage-user-table-filter.component';
import { ShareModule } from 'src/app/shared/share/share.module';
import { ManageUserTableComponent } from './manage-user-table/manage-user-table.component';
import { ManageuserComponent } from './manageuser.component';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ManageuserComponent,
    ManageUserTableFilterComponent,
    ManageUserTableComponent
  ],
  imports: [
    CommonModule,
    ManageuserRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatButtonModule,
    ShareModule
  ]
})
export class ManageuserModule { }
