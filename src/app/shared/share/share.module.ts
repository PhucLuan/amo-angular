import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StatePipe } from 'src/app/core/pipe/state.pipe';
import { ArrowcirclebtnComponent } from '../button/arrowcirclebtn/arrowcirclebtn.component';



@NgModule({
  declarations: [StatePipe,ArrowcirclebtnComponent],
  imports: [
    CommonModule
  ],
  exports: [
    StatePipe,ArrowcirclebtnComponent
  ]
})
export class ShareModule { }
