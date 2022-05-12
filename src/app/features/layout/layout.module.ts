import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout.component';
import { HeaderComponent } from 'src/app/shared/header/header.component';
import { SidebarComponent } from 'src/app/shared/sidebar/sidebar.component';
import { RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';



@NgModule({
  declarations: [LayoutComponent,
    HeaderComponent,
    SidebarComponent,
    //NgbdDropdownBasic,
  ],
  imports: [
    CommonModule, RouterModule,MatIconModule,MatMenuModule
  ]
})
export class LayoutModule { }
