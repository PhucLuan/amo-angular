import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShellService } from '../layout/shell.service';
import { ManageuserFormComponent } from './manageuser-form/manageuser-form.component';
import { ManageuserComponent } from './manageuser.component';

const routes: Routes = [
  ShellService.childRoutes([
    {
      path: 'user',
      component: ManageuserComponent,
      data: { title: 'User' },
    },
    {
      path: 'user/CreateUser',
      component: ManageuserFormComponent,
      data: { title: 'User > Create New User' },
    },
    {
      path: 'user/EditUser/:id',
      component: ManageuserFormComponent,
      data: { title: 'User > Edit User' },
    },
  ]),
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ManageuserRoutingModule { }
