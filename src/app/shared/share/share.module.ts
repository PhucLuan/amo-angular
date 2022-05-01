import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StatePipe } from 'src/app/core/pipe/state.pipe';



@NgModule({
  declarations: [StatePipe],
  imports: [
    CommonModule
  ],
  exports: [
    StatePipe,
  ]
})
export class ShareModule { }
