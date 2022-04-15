import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShellService } from '../layout/shell.service';
import { HomeComponent } from './home.component';

const routes: Routes = [
  ShellService.childRoutes([
    {
      path: 'home',
      component: HomeComponent,
      data: { title: 'Home' },
    },
    {
      path: '',
      //component: LayoutComponent,
      redirectTo: 'home',
      pathMatch: 'full',
    },
  ]),
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
