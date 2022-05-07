import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StatePipe } from 'src/app/core/pipe/state.pipe';
import { ArrowcirclebtnComponent } from '../button/arrowcirclebtn/arrowcirclebtn.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { CheckbtnComponent } from '../button/checkbtn/checkbtn.component';
import { CancelbtnComponent } from '../button/cancelbtn/cancelbtn.component';
import { XcirclebtnComponent } from '../button/xcirclebtn/xcirclebtn.component';



@NgModule({
  declarations: [StatePipe,ArrowcirclebtnComponent,CheckbtnComponent,CancelbtnComponent,XcirclebtnComponent],
  imports: [
    CommonModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatCardModule,
    MatButtonModule
  ],
  exports: [
    StatePipe,
    ArrowcirclebtnComponent,
    CheckbtnComponent,
    CancelbtnComponent,
    XcirclebtnComponent,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatCardModule,
    MatButtonModule
  ]
})
export class ShareModule { }
