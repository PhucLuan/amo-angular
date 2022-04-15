import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShellService } from '../layout/shell.service';
import { WelcomeComponent } from './welcome.component';

const routes: Routes = [
  {
    path: 'welcome',
    component: WelcomeComponent,
    data: { title: 'Welcome' },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WelcomeRoutingModule { }
