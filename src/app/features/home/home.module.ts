import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatCardModule } from '@angular/material/card';
import { HomeComponent } from './home.component';
import { HometableComponent } from './hometable/hometable.component';
import { StatePipe } from 'src/app/core/pipe/state.pipe';
import { CheckbtnComponent } from 'src/app/shared/button/checkbtn/checkbtn.component';
import { CancelbtnComponent } from 'src/app/shared/button/cancelbtn/cancelbtn.component';
import { ArrowcirclebtnComponent } from 'src/app/shared/button/arrowcirclebtn/arrowcirclebtn.component';


@NgModule({
  declarations: [HomeComponent, HometableComponent,CheckbtnComponent,CancelbtnComponent, ArrowcirclebtnComponent, StatePipe],
  imports: [
    HomeRoutingModule,
    CommonModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatCardModule,
  ]
})
export class HomeModule { }
