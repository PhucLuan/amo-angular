//import { Injectable } from '@angular/core';
import { Route, Routes } from '@angular/router';
import { AuthenticationGuard } from '../../core/authentication/authentication.guard';
import { LayoutComponent } from './layout.component';
//@Injectable()
export class ShellService {
  //constructor() { }
  static childRoutes(routes: Routes): Route {
    return {
      path: '',
      component: LayoutComponent,
      children: routes.concat({
        path: '',
        redirectTo: 'ahihi',
        pathMatch: 'full',
      }),
      canActivate: [AuthenticationGuard],
      data: { reuse: true },
    };
  }
}
