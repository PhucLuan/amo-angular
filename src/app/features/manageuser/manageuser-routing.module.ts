import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShellService } from '../layout/shell.service';
import { ManageuserComponent } from './manageuser.component';

const routes: Routes = [
  ShellService.childRoutes([
    {
      path: 'user',
      component: ManageuserComponent,
      data: { title: 'User' },
    },
  ]),
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ManageuserRoutingModule { }
