import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
//import { LayoutComponent } from './features/layout/layout.component';

const routes: Routes = [
  // {
  //   path: '',
  //   component: LayoutComponent,
  //   //redirectTo: '',
  //   //pathMatch: 'full',
  // },
  {
    path: '**',
    //component: WelcomeComponent,
    redirectTo: '',
    pathMatch: 'full',
  },
  // {
  //   path: 'app',
  //   component: LayoutComponent,
  //   children: [
  //     { path: '', redirectTo: '/app/home-component', pathMatch: 'full' },
  //     {
  //       path: 'home-component',
  //       component: HomeComponent,
  //     },
  //     {
  //       path: 'asset-component',
  //       component: ManageuserComponent,
  //     },
  //   ],
  // },
  // { path: 'asset-component', component: ManageassetComponent },
  // { path: 'user-component', component: ManageuserComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
