import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ManageRequestForReturningRoutingModule } from './manage-request-for-returning-routing.module';
import { ManageRequestForReturningComponent } from './manage-request-for-returning/manage-request-for-returning.component';
import { ManageRequestTableComponent } from './manage-request-table/manage-request-table.component';
import { ShareModule } from 'src/app/shared/share/share.module';


@NgModule({
  declarations: [
    ManageRequestForReturningComponent,
    ManageRequestTableComponent
  ],
  imports: [
    CommonModule,
    ManageRequestForReturningRoutingModule,
    ShareModule
  ]
})
export class ManageRequestForReturningModule { }
