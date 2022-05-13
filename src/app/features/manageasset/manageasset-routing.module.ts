import { AssetFormComponent } from './asset-form/asset-form.component';
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
    {
      path: 'asset/CreateAsset',
      component: AssetFormComponent,
      data: { title: 'Asset > Create New Asset' },
    },
    {
      path: 'asset/EditAsset/:id',
      component: AssetFormComponent,
      data: { title: 'Asset > Edit Asset' },
    },
  ]),
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ManageassetRoutingModule { }
