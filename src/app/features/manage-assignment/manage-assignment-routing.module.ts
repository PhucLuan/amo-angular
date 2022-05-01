import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShellService } from '../layout/shell.service';
import { ManageAssignmentComponent } from './manage-assignment.component';

const routes: Routes = [
  ShellService.childRoutes([
    {
      path: 'assignment',
      component: ManageAssignmentComponent,
      data: { title: 'Assignment' },
    }
  ]),
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ManageAssignmentRoutingModule { }
