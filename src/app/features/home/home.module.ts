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


@NgModule({
  declarations: [HomeComponent, HometableComponent, StatePipe],
  imports: [
    CommonModule,
    HomeRoutingModule,
    CommonModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatCardModule,
    //HomeRoutingModule,
  ]
})
export class HomeModule { }
