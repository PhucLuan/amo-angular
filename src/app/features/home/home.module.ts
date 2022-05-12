import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { HometableComponent } from './hometable/hometable.component';
import { ShareModule } from 'src/app/shared/share/share.module';
import { ArrowcirclebtnModule } from 'src/app/shared/share/arrowcirclebtn/arrowcirclebtn.module';
import { CancelbtnModule } from 'src/app/shared/share/cancelbtn/cancelbtn.module';
import { CheckbtnModule } from 'src/app/shared/share/checkbtn/checkbtn.module';


@NgModule({
  declarations: [HomeComponent, HometableComponent,],
  imports: [
    HomeRoutingModule,
    CommonModule,
    ShareModule,
    ArrowcirclebtnModule,
    CancelbtnModule,
    CheckbtnModule
  ]
})
export class HomeModule { }
