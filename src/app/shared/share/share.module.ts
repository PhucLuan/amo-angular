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



@NgModule({
  declarations: [StatePipe,ArrowcirclebtnComponent,CheckbtnComponent,CancelbtnComponent],
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
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatCardModule,
    MatButtonModule
  ]
})
export class ShareModule { }
