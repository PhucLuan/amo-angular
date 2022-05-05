import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ManageReportRoutingModule } from './manage-report-routing.module';
import { ReportComponent } from './report/report.component';
import { ShareModule } from 'src/app/shared/share/share.module';


@NgModule({
  declarations: [
    ReportComponent
  ],
  imports: [
    CommonModule,
    ManageReportRoutingModule,
    ShareModule
  ]
})
export class ManageReportModule { }
