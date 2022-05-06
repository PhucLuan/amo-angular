import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShellService } from '../layout/shell.service';
import { ManageRequestForReturningComponent } from './manage-request-for-returning/manage-request-for-returning.component';

const routes: Routes = [
  ShellService.childRoutes([
    {
      path: 'request',
      component: ManageRequestForReturningComponent,
      data: { title: 'Asset' },
    }
  ]),
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ManageRequestForReturningRoutingModule { }
