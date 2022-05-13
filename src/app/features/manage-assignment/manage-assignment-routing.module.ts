import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShellService } from '../layout/shell.service';
import { AssignmentFormComponent } from './assignment-form/assignment-form.component';
import { ManageAssignmentComponent } from './manage-assignment.component';

const routes: Routes = [
  ShellService.childRoutes([
    {
      path: 'assignment',
      component: ManageAssignmentComponent,
      data: { title: 'Assignment' },
    },
    {
      path: 'assignment/CreateAssignment',
      component: AssignmentFormComponent,
      data: { title: 'Assignment > Create New Assignment' },
    },
    {
      path: 'assignment/EditAssignment/:id',
      component: AssignmentFormComponent,
      data: { title: 'Assignment > Edit Assignment' },
    },
  ]),
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ManageAssignmentRoutingModule { }
