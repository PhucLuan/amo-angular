import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShellService } from '../layout/shell.service';
import { ReportComponent } from './report/report.component';

const routes: Routes = [
  ShellService.childRoutes([
    {
      path: 'report',
      component: ReportComponent,
      data: { title: 'Report' },
    }
  ]),
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ManageReportRoutingModule { }
