import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout.component';
import { HeaderComponent } from 'src/app/shared/header/header.component';
import { SidebarComponent } from 'src/app/shared/sidebar/sidebar.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [LayoutComponent,
    HeaderComponent,
    SidebarComponent,
    //NgbdDropdownBasic,
  ],
  imports: [
    CommonModule, RouterModule
  ]
})
export class LayoutModule { }
