import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CheckbtnComponent } from '../../button/checkbtn/checkbtn.component';



@NgModule({
  declarations: [CheckbtnComponent],
  imports: [
    CommonModule
  ],
  exports: [
    CheckbtnComponent
  ]
})
export class CheckbtnModule { }
