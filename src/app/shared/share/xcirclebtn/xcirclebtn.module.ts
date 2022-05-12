import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { XcirclebtnComponent } from '../../button/xcirclebtn/xcirclebtn.component';



@NgModule({
  declarations: [XcirclebtnComponent],
  imports: [
    CommonModule
  ],
  exports:[XcirclebtnComponent]
})
export class XcirclebtnModule { }
