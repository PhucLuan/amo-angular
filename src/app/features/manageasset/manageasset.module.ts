import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ManageassetRoutingModule } from './manageasset-routing.module';
import { AssetTableComponent } from './asset-table/asset-table.component';
import { ManageassetComponent } from './manageasset.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { MatCardModule } from '@angular/material/card';
import { AssetFilterComponent } from './asset-filter/asset-filter.component';
import { MatSelectModule } from '@angular/material/select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AssetModalComponent } from './asset-modal/asset-modal.component';
import { XcirclebtnComponent } from 'src/app/shared/button/xcirclebtn/xcirclebtn.component';


@NgModule({
  declarations: [
    ManageassetComponent,
    AssetTableComponent,
    AssetFilterComponent,
    AssetModalComponent,
    XcirclebtnComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ManageassetRoutingModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatCardModule,
    MatSelectModule
  ]
})
export class ManageassetModule { }
