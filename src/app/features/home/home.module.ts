import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { HometableComponent } from './hometable/hometable.component';
import { ShareModule } from 'src/app/shared/share/share.module';


@NgModule({
  declarations: [HomeComponent, HometableComponent,],
  imports: [
    HomeRoutingModule,
    CommonModule,
    ShareModule
  ]
})
export class HomeModule { }
