import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CancelbtnComponent } from '../../button/cancelbtn/cancelbtn.component';



@NgModule({
  declarations: [CancelbtnComponent],
  imports: [
    CommonModule
  ],
  exports: [CancelbtnComponent]
})
export class CancelbtnModule { }
