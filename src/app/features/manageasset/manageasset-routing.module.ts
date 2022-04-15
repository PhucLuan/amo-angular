import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShellService } from '../layout/shell.service';
import { ManageassetComponent } from './manageasset.component';

const routes: Routes = [
  ShellService.childRoutes([
    {
      path: 'asset',
      component: ManageassetComponent,
      data: { title: 'Asset' },
    },
  ]),
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ManageassetRoutingModule { }
