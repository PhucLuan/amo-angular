import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatCardModule } from '@angular/material/card';
import { HomeComponent } from './home.component';
import { HometableComponent } from './hometable/hometable.component';
import { CheckbtnComponent } from 'src/app/shared/button/checkbtn/checkbtn.component';
import { CancelbtnComponent } from 'src/app/shared/button/cancelbtn/cancelbtn.component';
import { ShareModule } from 'src/app/shared/share/share.module';


@NgModule({
  declarations: [HomeComponent, HometableComponent, CheckbtnComponent, CancelbtnComponent,],
  imports: [
    HomeRoutingModule,
    CommonModule,
    ShareModule
  ]
})
export class HomeModule { }
